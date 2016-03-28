/**
 * Stanislav Gumeniuk i@vigo.su
 */

"use strict";

function getEngine(packageJson) {
    if (packageJson.engines && packageJson.engines.node) {
        var found = packageJson.engines.node.match(/\d(\.\d)?(\.\d)?/gi);
        if (found) {
            return found[0];
        }
    }
    return '4.2.3'
}

module.exports = function (packageJson) {
    return new Promise(function (resolve, reject) {
        if (!packageJson) {
            reject(new Error('Empty params'));
        }
        var params = {};
        params.version = packageJson.version;

        params.name = packageJson.name;

        params.nodeVersion = getEngine(packageJson);

        if (packageJson.author) {
            params.maintainer = packageJson.author;
        }


        if (packageJson.scripts && packageJson.scripts.start) {
            params.npmStart = packageJson.scripts.start;
        } else if (packageJson.main) {
            params.entryPoint = packageJson.main;
        }

        resolve(params);
    });
};
