(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * lettering-demo
 * https://github.com/voku/bower-lettering
 *
 * Copyright (c) 2015 Lars Moelleken
 * Licensed under the MIT license.
 */

letteringDemo = function() {
  var nodeLettering = require('node-lettering');
  var language = ['PHP', 'JS', 'Node.js', 'IO.js'];
  var insert = document.querySelector("#js-insert");
  var i, element;

  for (i = 0; i < language.length; i++) {
    element = document.createElement('p');
    element.innerHTML = nodeLettering.lettering(language[i]);
    insert.appendChild(element);
  }
}

letteringDemo();
},{"node-lettering":2}],2:[function(require,module,exports){
/**
 * lettering
 * https://github.com/voku/node-lettering
 *
 * Copyright (c) 2015 Lars Moelleken
 * Licensed under the MIT license.
 */

/**
 * wrap every letter from a string with a unique "span"-tag
 *
 * @param  {String} str
 * @return {String}
 */
module.exports = {
  lettering: function(str) {
    var output = '';
    var chunks = [];
    var chunksLength = 0;
    var len = str.length;
    var pos = 0;
    var idx = 1;
    var i;

    str += '';
    while (pos < len) {
      chunks.push(str.slice(pos, pos += 1))
    }

    chunksLength = chunks.length;
    for (i = 0; i <= chunksLength; i++) {
      if (typeof chunks[i] == 'undefined') {
        continue;
      }

      output += '<span class="char' + idx++ + '">' + chunks[i] + '</span>';
    }

    return String(output);
  },

};

},{}]},{},[1]);
