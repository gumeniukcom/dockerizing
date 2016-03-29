/**
 * Stanislav Gumeniuk i@vigo.su
 */

"use strict";

var fs = require('fs');
var path = require('path');
var co = require('co');

var dockerfile = require('./src/dockerfile');

var packageJsonSource = require('../../package.json');
var packageJsonParser = require('./src/packageJsonParser');

co(function * () {
    let params = yield packageJsonParser(packageJsonSource);
    let dockerfileRendered = yield dockerfile(params);

    let fileName = path.join(__dirname, '..', '..', 'Dockerfile');
    fs.writeFileSync(fileName, dockerfileRendered, {encoding: 'utf8'});

})
    .catch(function (error) {
        console.error(error);
    });