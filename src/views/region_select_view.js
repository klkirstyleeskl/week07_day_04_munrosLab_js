const PubSub = require('../helpers/pub_sub.js');


const RegionView = function(element) {
this.element = element
};

RegionView.prototype.bindEvents = function () {
PubSub.subscribe('Munro:munro-data-loaded', (event) => {
     const region = event.detail;
    this.populate(region)
});
this.element.addEventListener('change', (event) => {
  const selectIndex = event.target.value;
  PubSub.publish('RegionSelect:change', selectIndex);
});
};

RegionView.prototype.populate = function (data) {
  data.forEach((munro, index) => {
    const option = document.createElement('option');
    option.textContent = munro.region
    option.value = index;
    this.element.appendChild(option);
  });

};





module.exports = RegionView;
