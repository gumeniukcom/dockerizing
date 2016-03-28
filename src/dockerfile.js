/**
 * Stanislav Gumeniuk i@vigo.su
 */

"use strict";

var fs = require('fs');
var path = require('path');
var wash = require('wash');


module.exports = function (params) {
    return new Promise(function (resolve, reject) {
        var dockerfileTemplate = fs.readFileSync(path.join(__dirname, 'templates', 'Dockerfile.tmp'), {encoding: 'utf8'});

        var out = wash.render(dockerfileTemplate, params);

        resolve(out);
    })
};
