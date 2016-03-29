/**
 * Stanislav Gumeniuk i@vigo.su
 */

"use strict";

var path = require('path');
var co = require('co');
var exec = require('promised-exec');

var packageJsonSource = require('../../package.json');
var packageJsonParser = require('./src/packageJsonParser');


co(function * () {
    let params = yield packageJsonParser(packageJsonSource);
    let latestBuildResult = yield exec('cd ' + path.join(__dirname, '..', '..') + ' && docker build -t ' + params.name + ' . ');
    console.log(latestBuildResult);

    let versionedBuildResult = yield exec('cd ' + path.join(__dirname, '..', '..') + ' && docker build -t ' + params.name + ':' + params.version + ' . ');
    console.log(versionedBuildResult);
})
    .catch(function (error) {
        console.error(error);
    });