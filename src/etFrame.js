import uWS from 'uWebSockets.js';
import App from './app.js';
import Route from './route.js';
import Config from './config.js';

console.log('jka');

const test = (mess) => {
  console.log('mess', mess);
}

const etFrame = (host = 'localhost', port = 80, options = {}) => {
  let app;

  if (options.https && options.isSSL !== false) {
    app = uWS.SSLApp(options.https);
  } else {
    app = uWS.App();
  }
  console.log('app', app);

  const config = new Config(host, port, options);
  const routeInstance = new Route(config);

  return new App(config, app, routeInstance);
};

etFrame.getParts = uWS.getParts;

export {test};
export default etFrame;
