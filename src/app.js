const Munro = require('./models/munro.js');
const ListView = require('./views/list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');


  const munroElement = document.querySelector('#munro');
  const listView = new ListView(munroElement);
  listView.bindEvents();

  const munro = new Munro();
  munro.getData();


});
