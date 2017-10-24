'use strict';

let express = require('express');
let trips = require('../lib/models/trip');
let router = new express.Router();

/* GET home page. */
router.get('/', (req, res,next) => {
    console.log(req.query.filters);
    var filters = req.query.filters && req.query.filters.length > 0? req.query.filters.split(',') : null;
    console.log(filters);
    var limit = req.query.limit ? Number(req.query.limit) : 12;
    var page = req.query.page ? Number(req.query.page) : 0;

    trips.getCount(filters,
        (err,count) => {
            if (err) {
                console.log(err);    
                count = 0;            
            }
            
            if (count == 0) {
                let result = {
                    total: 0,
                    total_pages: 0,
                    current_page: 0,
                    limit: limit,
                    trips: []
                };
                res.json(result);
                return;
            }
            trips.getTrips(filters,limit,page,
                (error,items) => {
                    if (error) {
                        console.log(error);
                    }

                    let ids = [];
                    let tag_blocks = {};
                    for (let i = 0; i < (items ? items.length : -1); i++) {
                        ids.push(items[i].id);
                    }

                    trips.getTagsForIds(ids,
                        (err,tags) => {
                            if (err) {
                                console.log(err);
                            }

                            for(let i = 0; i < tags.length; i++) {
                                let tag = tags[i];
                                let existing_block = tag_blocks["" + tag.trip_id];
                                if (!existing_block) {
                                    existing_block = [tag.name];
                                }
                                else {
                                    existing_block.push(tag.name);
                                }
                                tag_blocks["" + tag.trip_id] = existing_block;
                            }

                            for (let i = 0; i < (items ? items.length : -1 ); i++) {
                                items[i]['tags'] = tag_blocks["" + items[i].id] ? tag_blocks["" + items[i].id] : [];                                
                            }

                            let result = {
                                total: count,
                                total_pages: Math.ceil(count * 1.0 / limit),
                                current_page: page,
                                limit: limit,
                                trips: items
                            }
        
                            res.json(result);
                        }
                    );                                                            
                }
            );
        }
    );    
});

router.get('/:id', (req,res,next) => {    
    trips.getTripForId(req.params.id,
        (error,trip) => {

            trips.getTagsForIds([trip.id],
                (err,tags) => {
                    if (err) {
                        console.log(err);
                    }

                    let tag_names = []
                    for(let i = 0; i < tags.length; i++) {
                        let tag = tags[i];
                        
                        tag_names.push(tag.name);
                    }

                    trip['tags'] = tag_names;
                    let result = {
                        trip: trip
                    };
                    res.json(result);
                }
            );            
        }
    );
});

router.get("/:id/add_tag", (req,res,next) => {
    let name = req.query.name;
    let type = req.query.type;
    if (!name || !type) {
        res.status(500).json({error:"not enough params"});
        return;
    }

    trips.getTripForId(req.params.id,
        (error,trip) => {
            if (error) {
                res.status(500).json({error:error});
                return;
            }

            trips.addTagToTrip(trip.id,name,type,
                (err,result) => {
                    if (err) {
                        res.status(500).json({error:err});
                        return;
                    }

                    res.json(result);
                }
            );

        }
    );
});

module.exports = router;
