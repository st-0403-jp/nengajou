/*util.js*/

common.util = (function () {
  var method = {};

    method.setSessionStorage = function (key, val) {
      if (!window.sessionStorage) {return false;}
      try {
        sessionStorage.setItem(key, val);
      }catch (err) {
        console.log(err);
      }
    };

    method.getSessionStorage = function (key) {
      if (!window.sessionStorage) {return false;}
      try {
        var storageVal = sessionStorage.getItem(key);
      }catch (err) {
        console.log(err);
      }
      return storageVal;
    };

  return method;
})();
