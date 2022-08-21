const Router = require('koa-router');

const api = new Router();

api.get('/query', (cxt) => {
  cxt.body = 'query api';
});

module.exports = api;
