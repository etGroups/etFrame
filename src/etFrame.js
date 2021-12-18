import uWS from 'uWebSockets.js';
import App from './app.js';
import Route from './route.js';
import Config from './config.js';

const etFrame = (host = 'localhost', port = 80, options = {}) => {
  let app;

  if (options.https && options.isSSL !== false) {
    app = uWS.SSLApp(options.https);
  } else {
    app = uWS.App();
  }

  const config = new Config(host, port, options);
  const routeInstance = new Route(config);

  return new App(config, app, routeInstance);
};

etFrame.getParts = uWS.getParts;

export default etFrame;
