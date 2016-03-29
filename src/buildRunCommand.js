/**
 * Stanislav Gumeniuk i@vigo.su
 */

"use strict";

module.exports = function (params) {
    return new Promise(function (resolve, reject) {
        let command = 'docker run -d ';

        if (params.docker) {
            if (params.docker.ports && params.docker.ports.length > 0) {
                params.docker.ports.forEach(function (port) {
                    command += ' -p ' + port.out + ':' + port.in + ' ';
                })
            }
        }

        command += params.name;

        resolve(command);
    });
};
