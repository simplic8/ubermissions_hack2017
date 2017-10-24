'use strict';

let express = require('express');
let users = require('../lib/models/user');
let router = new express.Router();

/* GET home page. */
router.get('/', (req, res,next) => {
    res.send("Roles placeholder page");
    next();
});

router.get('/:id', (req,res,next) => {    

    users.getUserForId(req.params.id,
        (user)=> {
            let result = {
                user: user
            };
            res.json(result);
        }
    );
});

module.exports = router;
