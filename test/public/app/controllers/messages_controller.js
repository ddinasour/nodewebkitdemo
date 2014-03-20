module.exports = {
  list: function () {
    console.log('list function');
  },
  create: function (req) {
    console.log('create function');
  },
  get: function (req, res, next) {
    console.log('get function');
  }
};
