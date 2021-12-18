import fs from 'fs';

class Route {
  constructor(config) {
    this.config = config;
  }

  // TODO: change to new structure
  async run(appName, request) {
    try {
      let path = `./resources/${appName}/${request.resource}.js`;
      if (!fs.existsSync(path)) {
        path = `./resources/common/${request.resource}.js`;
      }

      const resource = await import(`.${path}`);
      const obj = new resource.default();
      return eval(`obj.${request.method}(request.params)`);
    } catch (error) {
      console.log(error);
    }
    return false;
  }
}

export default Route;
