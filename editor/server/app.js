const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const mount = require('koa-mount');
const logger = require('koa-logger');

const indexRoute = require('./routes/index');
const apiRoute = require('./routes/api');
const viewRoute = require('./routes/view');
const createRenderServer = require('./utils/createRenderServer');
const watch = require('./utils/fileWatcher');

const app = new Koa();

global.IS_PROD = process.env.NODE_ENV === 'production';

app.use(bodyparser());

app.use(logger());

createRenderServer(app);

watch.runWatcher();

app.use(indexRoute.routes());
app.use(mount('/api', apiRoute.middleware()));
app.use(mount('/view', viewRoute.middleware()));

app.on('error', function (err, cxt) {
  console.error('server error', err, cxt);
});

module.exports = app;
