const PubSub = require('../helpers/pub_sub.js')


const ListView = function(element) {
  this.element = element
};


ListView.prototype.bindEvents = function () {
  PubSub.subscribe('Munro:munro-data-loaded', (event) => {
    const munro = event.detail;
    console.log(munro);
  })

};






module.exports = ListView;
