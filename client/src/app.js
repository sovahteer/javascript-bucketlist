const FormView = require('./views/form_view.js');
const GridView = require('./views/grid_view.js');
const BucketList = require('./models/bucket_list.js');

document.addEventListener('DOMContentLoaded', () => {

    // 1. We need to grab/create a form "object" from our html
    const form = document.querySelector('form#bucket-list-form');
    // 2. Create a formview using the form object 
    const formView = new FormView(form);
    // 3. Bind events for the formview so we can publish/subscribe to data

    formView.bindEvents();

    // 4. Now we need to get the container for the grid view of ALL the items 
    const container = document.querySelector('div#items');
    // 5. We need to create a grid view using this container
    const gridView = new GridView(container);
    // 6. Bind events for the gridview so we can publish/subscribe to data
    gridView.bindEvents();

    // 7. We need to new up a model in the app
    const bucketList = new BucketList();
    // 8. Bind events to the model so it can publish/subscribe to data and communicate with views
    bucketList.bindEvents();
    bucketList.getData();


});