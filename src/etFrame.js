import uWS, { App } from 'uWebSockets.js';

const etFrame = (options = {}) => {
  let app;

  if (options.https && options.isSSL !== false) {
    app = uWS.SSLApp(options.https);
  } else {
    app = uWS.App();
  }

  const config = new Config(options);
  const routeInstance = new Route(config);

  return new App(config, app, routeInstance);
};

etFrame.getParts = uWS.getParts;

export default etFrame;
