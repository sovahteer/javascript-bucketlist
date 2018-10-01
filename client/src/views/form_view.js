const PubSub = require('../helpers/pub_sub.js');

const FormView = function(form){
    this.form = form;
}

// do optionMaker 
// addd to db of this element
//add Ev listtner = when number chosen, fidn it in this array, and delete

FormView.prototype.bindEvents = function(){
    this.createRankOption();
    this.form.addEventListener('submit', (event) => {
        this.handleSubmit(event);
    });
};

FormView.prototype.handleSubmit = function(event){
    event.preventDefault();
    const newItem = this.createItem(event.target);
    console.log(newItem);
    PubSub.publish('FormView:item-submitted', newItem);
    event.target.reset();
};

FormView.prototype.createItem = function(form){
    const newItem = {
        rank: form.optionRank.value,
            activity: form.activity.value,
            category: form.category.value,
            location: form.location.value
    };
    console.log(newItem)
    return newItem;
};




FormView.prototype.createRankOption = function(){
 const availableRankNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const dropHtmlElement = document.querySelector('#optionRank');
    availableRankNumbers.forEach((number) => {
        const tempElement = document.createElement('option');
        tempElement.textContent  = number;
        dropHtmlElement.appendChild(tempElement);
    })
}


module.exports = FormView;