export default class Config {
  constructor(host, port, options = {}) {
    [this.host, this.port] = [host, port];
    this.options = options;
  }

  get https() {
    return this.options.https !== undefined && this.options.isSSL !== false;
  }
}
