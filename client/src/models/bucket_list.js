const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const BucketList = function(url){
    this.url = 'http://localhost:3000/api/bucket_lists';
    this.request = new Request(this.url);
}




BucketList.prototype.getData = function(){
    this.request.get()
    .then((items) => {
        PubSub.publish('BucketList:all-data-loaded', items);
    })
    .catch(console.error);
};

BucketList.prototype.bindEvents = function(){
    PubSub.subscribe('ItemView:item-delete-clicked', (event) => {
        this.deleteItem(event.detail);
    });

    PubSub.subscribe('FormView:item-submitted', (event) => {
        this.postItem(event.detail);
    });
};

BucketList.prototype.deleteItem = function(itemId){
    this.request.delete(itemId)
    .then((items) => {
        PubSub.publish('BucketList:all-data-loaded', items);
    })
    .catch(console.error);
};

BucketList.prototype.postItem = function(item){
    this.request.post(item)
    .then((items) => {
        PubSub.publish('BucketList:all-data-loaded', items);
    })
    .catch(console.error);
}

module.exports = BucketList;