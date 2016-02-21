/*render.js*/

common.render = (function () {
  var method = {};

  method.parentEle = null;

  method.htmlData = null;

  method.storageName = null;

  /*
  dataObj = {
    tmp: parentEle,
    content: htmlData,
    (userName) : storageName
  }
  */
  method.init = function (dataObj) {
    this.parentEle = dataObj.tmp;
    this.htmlData = dataObj.content;
    this.storageName = dataObj.userName;

    console.log(this);

    this.render(this.parentEle, this.htmlData);
  };

  method.userName = function () {
    if (this.storageName) {
      $('.js-name').html(this.storageName + '<span class="sama">様</span>');
    }
  };

  method.render = function (parentEle, htmlData, storageName) {
    if (!parentEle) {
      return false;
    }
    if (!htmlData) {
      htmlData = '<p>データがありません</p>';
    }
    parentEle.html(htmlData);
    this.userName();
  };

  return method;

})();