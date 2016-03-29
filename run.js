/**
 * Stanislav Gumeniuk i@vigo.su
 */

"use strict";

var exec = require('promised-exec');
var co = require('co');

var packageJsonSource = require('../../package.json');
var packageJsonParser = require('./src/packageJsonParser');
var buildRunCommand = require('./src/buildRunCommand');

co(function * () {
    let params = yield packageJsonParser(packageJsonSource);
    let buildCommand = yield buildRunCommand(params);

    let buildResult = yield exec(buildCommand);

    console.log(buildResult);
})
    .catch(function (error) {
        console.error(error);
    });