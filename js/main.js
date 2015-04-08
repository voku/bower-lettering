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