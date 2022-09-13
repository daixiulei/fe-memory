const path = require('path');
module.exports = {
  pathes: {
    clientRootPath: path.join(__dirname, '../../client'),
    template: path.join(__dirname, '../../client/index.html'),
    dist: path.join(__dirname, '../../dist/client'),
    distTemplate: path.join(__dirname, '../../dist/client/index.html'),
    clientDistEntry: path.join(__dirname, '../../dist/client/entry-client.js'),
    serverDistEntry: path.join(__dirname, '../../dist/server/entry-server.js'),
    serverDevEntry: path.join(__dirname, '../../client/src/entry-server'),
    postBaseDir: path.join(__dirname, '../../../source/_posts'),
  },
};
