class Base {
  constructor(path) {
    this.path = path;
  }
  load() {
    browser.url(this.path);
  }
}

module.exports = Base;

let test = new Base('./dev/login');
