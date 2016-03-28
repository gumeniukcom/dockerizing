/**
 * Stanislav Gumeniuk i@vigo.su
 */

"use strict";

var fs = require('fs');
var path = require('path');

var dockerfile = require('./src/dockerfile');

var packageJsonSource = require('../../package.json');
var packageJsonParser = require('./src/packageJsonParser');

packageJsonParser(packageJsonSource)
    .then(function (params) {
        return dockerfile(params)
    })
    .then(function (result) {
        var fileName = path.join(__dirname, '..', '..', 'Dockerfile');
        fs.writeFileSync(fileName, result, {encoding: 'utf8'})
    })
    .catch(function (error) {
        console.error(error);
    });