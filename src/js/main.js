window.jQuery = require('jquery');
var $ = window.jQuery;
var _ = require('ramda');

var url = window.location.pathname;

// If you change the url you may need to modify this number
var indexOfAddedLanguage = 1;

var split = _.curry(function(term, string) {
  return string.split(term);
});

var join = _.curry(function(term, arr) {
  return arr.join(term);
});

var splitHash = split('/');
var joinHash = join('/');
var splitURL = splitHash(url);

var insertOnArray = _.curry(function(arr, index, value) {
  return [].concat(arr.slice(0,index), value, arr.slice(index, arr.length));
});

var removeOnArray = _.curry(function(arr, index) {
  return [].concat(arr.slice(0,index), arr.slice(index + 1, arr.length));
});

var URLInsertOnIndex = insertOnArray(splitURL);

var addLanguage = _.compose(joinHash, URLInsertOnIndex(indexOfAddedLanguage));

var removeFromURL = _.compose(joinHash, removeOnArray(splitURL));

$(function(){
  require('bootstrap');

  $('.js-locale-change').on('click', function(){
    var url = window.location.pathname;

    var ln = $(this).data('language');
    if(ln == 'en') {
      window.location.replace(removeFromURL(indexOfAddedLanguage));
    }
    else {
      window.location.replace(addLanguage('pt'))
    }
  });
});
