const Router = require('koa-router');

const api = new Router();

api.get('/query', (cxt) => {
  cxt.body = 'query api';
});

api.get('/menutree', (cxt) => {
  cxt.body = global.POST_MENU_TREE;
  cxt.status = 200;
});

module.exports = api;
