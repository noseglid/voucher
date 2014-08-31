var Promise = require('es6-promise').Promise;

module.exports = function vouch(fn /* args... */) {
  var args = Array.prototype.slice.call(arguments, 1);
  return new Promise(function(resolve, reject) {
    args.push(function(err, result) {
      if (err) return reject(err);
      resolve(result);
    });
    fn.apply(null, args);
  });
}
