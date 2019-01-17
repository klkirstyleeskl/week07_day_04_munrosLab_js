const PubSub = require('../helpers/pub_sub.js');

const MunroView = function(container, munro) {
  this.munroContainer = container;
  this.munro = munro;
};

MunroView.prototype.bindEvents = function () {
  PubSub.subscribe('RegionSelect:change', (event) => {
    const regionIndex = event.detail;
    console.log(regionIndex);
  });

};
MunroView.prototype.render = function () {
  const munroContainer = document.createElement('div');
  munroContainer.classList.add('munro');

  const name = this.createMunroHeading();
  munroContainer.appendChild(name);

  const infoList = this.createInfoList();
  munroContainer.appendChild(infoList);

  this.munroContainer.appendChild(munroContainer);
};

MunroView.prototype.createMunroHeading = function () {
  const name = document.createElement('h2');
  name.classList.add('munro-name');
  name.textContent = this.munro.name;
  return name;
};

MunroView.prototype.createInfoList = function () {
  const infoList = document.createElement('ul');
  infoList.classList.add('munro-list');
  this.populateList(infoList);
  return infoList;
};

MunroView.prototype.populateList = function (list) {
  const munroListItem = document.createElement('li');
  munroListItem.textContent = this.munro.meaning;
  list.appendChild(munroListItem);
  const munroListItemHeight = document.createElement('li');
  munroListItemHeight.textContent = this.munro.height
  list.appendChild(munroListItemHeight);
};


module.exports = MunroView;
