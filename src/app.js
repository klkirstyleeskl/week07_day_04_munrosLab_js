const Munro = require('./models/munro.js');
const ListView = require('./views/list_view.js');
const RegionView = require('./views/region_select_view.js')
const MunroView = require('./views/munro_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const munroView = new MunroView();
  munroView.bindEvents();

  const regionSelect = document.querySelector('#regions');
  const regionView = new RegionView(regionSelect);
  regionView.bindEvents();

  const munroElement = document.querySelector('#munro');
  const listView = new ListView(munroElement);
  listView.bindEvents();

  const munro = new Munro();
  munro.getData();


});
