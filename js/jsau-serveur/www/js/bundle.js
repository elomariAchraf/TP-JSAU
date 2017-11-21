(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict'

  const my_shared_code_headless = require('../../my_modules/my_shared_file_headless.js')

function writeContent() {
    console.log('TODO: Replace this by actual code')
    console.log('Write the 20 first even numbers,')
    console.log('one per second')
    let numbers = my_shared_code_headless.generateEvenNumbers(20)
}

module.exports = {
    writeContent
}

},{"../../my_modules/my_shared_file_headless.js":2}],2:[function(require,module,exports){
'use strict'

function generateEvenNumbers(max) {
  var arr = []
  for (var i = 0; i < max; i+=2) {
    arr.push(i)
  }
  return arr
}

module.exports = {
    generateEvenNumbers
}

},{}],3:[function(require,module,exports){
'use strict'

const my_shared_code = require('../../my_modules/my_shared_code_ui.js')
const msg_elem = document.getElementById('message-pane')
my_shared_code.writeContent(msg_elem)

},{"../../my_modules/my_shared_code_ui.js":1}]},{},[3]);
