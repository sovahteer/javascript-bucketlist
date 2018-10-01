const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function(collection){
    
    const router = express.Router();

// INDEX - all bucketlist items
router.get('/', (req, res) => {
    collection
    .find()
    .toArray()
    .then((docs) => res.json(docs));
});

// SHOW - a certain bucklist item by ID
router.get('/:id', (req, res) => {
    const itemId = req.params.id;
    collection
    .findOne({_id: ObjectID(itemId)})
    .then((docs) => res.json(docs));
});

// CREATE - create a new bucketlist item
router.post('/', (req, res) => {
    const newItem = req.body;
    collection
    .insertOne(newItem)
    .then(() => collection.find().toArray())
    .then((docs) => res.json(docs));
});

// UPDATE - update a bucketlist item
router.put('/:id', (req, res) => {
    // first find the item to update by ID
    const itemId = req.params.id;
    const itemToUpdate = req.body;
    collection
    .updateOne(
        {_id: ObjectID(itemId)},
        {$set: itemToUpdate}
        )
    .then(() => collection.find().toArray())
    .then((docs) => res.json(docs));
});

// DESTROY - delete a bucket list item by id
router.delete('/:id', (req, res) => {
    const itemId = req.params.id;
    collection
    .deleteOne({_id: ObjectID(itemId)})
    .then(() => collection.find().toArray())
    .then((docs) => res.json(docs));
});

return router;

};

module.exports = createRouter;