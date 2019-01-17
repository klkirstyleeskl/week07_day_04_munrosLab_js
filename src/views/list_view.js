const PubSub = require('../helpers/pub_sub.js');
const MunroView = require('./munro_view.js');


const ListView = function(container) {
  this.container = container
};


ListView.prototype.bindEvents = function () {
  PubSub.subscribe('Munro:munro-data-loaded', (event) => {
      this.munro = event.detail
     this.render()
  });
};

ListView.prototype.render = function () {
  this.munro.forEach((munro_selected) => {
    const munroView = new MunroView(this.container, munro_selected);
    console.log();
    munroView.render();
  })
};







module.exports = ListView;
