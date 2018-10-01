const PubSub = require('../helpers/pub_sub.js');

const ItemView = function(container){
    this.container = container;
};

ItemView.prototype.render = function(item){
    const itemContainer = document.createElement('div');
    itemContainer.id = 'item';

    const rank = this.createHeading('Rank:', item.rank, 'rank');
    itemContainer.appendChild(rank);

    const activity = this.createHeading('Activity', item.activity, 'activity');
    itemContainer.appendChild(activity);

    const category = this.createInfo('Category:', item.category, 'category');
    itemContainer.appendChild(category);

    const location = this.createInfo('Location:', item.location, 'location');
    itemContainer.appendChild(location);

    const deleteButton = this.createDeleteButton(item._id);
    itemContainer.appendChild(deleteButton);

    // const updateButton = this.createUpdateButton(item._id);
    // itemContainer.appendChild(updateButton);

    this.container.appendChild(itemContainer);
};

ItemView.prototype.createHeading = function(label, text, elementId){
    const heading = document.createElement('h3');
    heading.textContent = `${label}: ${text}`;
    heading.classList.add(`${elementId}`);
    return heading;
};

ItemView.prototype.createInfo = function(label, text, elementId){
    const info = document.createElement('p');
    info.textContent = `${label}: ${text}`;
    info.classList.add(`${elementId}`);
    return info;
};

ItemView.prototype.createDeleteButton = function(itemId){
    const button = document.createElement('button');
    button.classList.add('delete-btn');
    button.value = itemId;

    button.addEventListener('click', (event) => {
        PubSub.publish('ItemView:item-delete-clicked', event.target.value);
    });

    return button;
};

// ItemView.prototype.createUpdateButton = function(itemId){
//     const button = document.createElement('button');
//     button.classList.add('update-btn');
//     button.value = itemId;

//     button.addEventListener('click', (event) => {
//         PubSub.publish()
//     })
// }


module.exports = ItemView;
