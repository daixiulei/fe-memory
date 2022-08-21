const connect = require('koa-connect');
const path = require('path');

const { pathes } = require('./config');

module.exports = async function createRenderServer(app) {
  if (!IS_PROD) {
    global.vite = await require('vite').createServer({
      configFile: path.resolve(__dirname, '../../client/vite.config.ts'),
      server: {
        middlewareMode: 'ssr',
      },
    });
    app.use(connect(vite.middlewares));
  } else {
    app.use(require('koa-compress'()));

    app.use(
      require('koa-static')(pathes.dist, {
        index: false,
      })
    );
  }
};
