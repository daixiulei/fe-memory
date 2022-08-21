const { build } = require('vite');
const path = require('path');

(async () => {
  // 服务端入口打包
  build({
    root: path.resolve(__dirname, './'),
    build: {
      outDir: path.join(__dirname, './dist/server'),
      ssr: path.join(__dirname, './client/src/entry-server'),
    },
  });

  // 客户端打包
  build({
    root: path.resolve(__dirname, '../'),
    build: {
      outDir: path.join(__dirname, './dist/client'),
      rollupOptions: {
        input: path.join(__dirname, './client/index.html'),
      },
    },
  });
})();
