
const express = require("express");
const router = express.Router();
let MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


router.post('/', (request, response) => {
    console.log("request data==>",request.body);
    MongoClient.connect(url, async function (err, db) {
        if (err) throw err;
        var dbmy = db.db('flutterapp_db1')
        var collectionName = "customer"
        var data = request.body
        console.log("data", data);
        var collection = dbmy.collection(collectionName);
        collection.findOne({ email: data.email }, function (err, res) {
            console.log("res", res)
            if (err) {
                console.log("Failed");
                response.json({
                    message: "failed",
                    response: null
                });
                db.close();
            } else {
                response.json({
                    message: "success",
                    response: res
                });
                db.close();
            }
        });

    })
});

module.exports = router;