const Router = require('koa-router');

const index = new Router();

index.get('/', async function (cxt) {
  cxt.status = 301;
  cxt.redirect('/view');
});

module.exports = index;
