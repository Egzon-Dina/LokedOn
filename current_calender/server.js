let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let config = require('../webpack/current_calender.config.es6');

new WebpackDevServer(webpack(config), {

  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  quiet: false,
  progress: true,
  stats: {
    colors: true
  }
}).listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
