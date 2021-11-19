// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
let MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var autoIncrement = require("mongodb-autoincrement");
//Here we are configuring express to use body-parser as middle-ware.


router.get('/', (request, response) => {
    console.log(request.body);
    MongoClient.connect(url, async function (err, db) {
        if (err) throw err;
        var dbmy = db.db('flutterapp_db1')
        var collectionName = "customer"
        var data = request.body
        console.log("data", data);


        var collection = dbmy.collection(collectionName);
        collection.findOne({ email: data.email, password: data.password }, function (err, res) {
            console.log("res", res)
            if (err) {
                console.log("Failed");
                response.json({
                    message: "failed",
                    response: null
                });
                db.close();
            } else {
                if(res != null){
                    response.json({
                        message: "Login successful",
                        response: res
                    });
                }else{
                    response.json({
                        message: "User not available",
                        response: null
                    });
                }
                
                db.close();
            }
        });

    })
});

module.exports = router;
