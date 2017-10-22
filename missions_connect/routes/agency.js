'use strict';

let express = require('express');
let agencies = require('../lib/models/agency');
let router = new express.Router();

/* GET home page. */
router.get('/', (req, res,next) => {
    res.send("Roles placeholder page");
    next();
});

router.get('/:id', (req,res,next) => {    
    console.log(req.params.id);
    agencies.getAgencyForId(req.params.id,
        (error,agency)=> {
            if (error) {
                console.log(error)
            }
            let result = {
                agency: agency
            };
            res.json(result);
        }
    );
});

module.exports = router;
