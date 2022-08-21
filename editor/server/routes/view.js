const Router = require('koa-router');
const fs = require('fs');
const { pathes } = require('../utils/config');

const app = require('../app');

const view = new Router();

view.get(/.+/gi, async function (cxt) {
  const url = cxt.req.url;

  try {
    let template, render;
    if (!IS_PROD) {
      template = fs.readFileSync(pathes.template, 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule(pathes.serverDevEntry)).render;
    } else {
      template = fs.readFileSync(pathes.distTemplate);
      render = await require(pathes.serverDistEntry).render;
    }
    const context = {};
    const appHtml = await render(url, context);
    console.log(appHtml);
    const html = template.replace(`<!--app-html-->`, appHtml);

    cxt.body = html;
    cxt.status = 200;
  } catch (e) {
    console.log(e);
    if (!IS_PROD) {
      vite.ssrFixStacktrace(e);
    }
    cxt.app.emit('error', new Error('server_html_error'), cxt, e);
  }
});

module.exports = view;
