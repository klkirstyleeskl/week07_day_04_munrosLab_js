const RequestHelper = requre('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');


const Munro = function() {
  this.text = null;
};

Munro.prototype.getData = function (munro) {
  const url = `https://munroapi.herokuapp.com/munros`;
  const request = new RequestHelper(url);

const myPromise = request.get();
myPromise.then((data) => {
  this.data = data.message;
  PubSub.publish('Munro:munro-data-loaded', this.data);
})
.catch((err) => {
  console.error(err);
})


};

module.exports = Munro;
