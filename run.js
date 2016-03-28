/**
 * Stanislav Gumeniuk i@vigo.su
 */

"use strict";

var fs = require('fs');
var path = require('path');

var packageJsonSource = require('../../package.json');
var packageJsonParser = require('./src/packageJsonParser');

var exec = require('promised-exec');

packageJsonParser(packageJsonSource)
    .then(function(params){
        return exec('docker run -d ' + params.name);
    })
    .then(function(result){
        console.log(result);
    })
    .catch(function (error) {
        console.error(error);
    });
