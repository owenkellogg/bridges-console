var repl = require("repl");
var requireAll = require('require-all-to-camel');

class Console {
  constructor(options) {
    if (options) {
      this.directories = options.loadDirectories;
      this.loadDirectories(options.loadDirectories);
      this.prompt = options.prompt || 'console';
    } else {
      this.prompt = 'console';
    }
  }
  loadDirectories(directories) {
    var _this = this;
    if (directories && directories.length > 0) {
      directories.forEach(_this.loadDirectory);
    }
  }
  loadDirectory(path) {
    globalize(requireAll(path));
  }
  start() {
    var _this = this;
    repl.start({
      useGlobal: true,
      prompt: _this.prompt+'> '
    });
  }
}

function capitaliseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function globalize(object) {
  Object.keys(object).forEach(function(key) {
    global[capitaliseFirstLetter(key)] = object[key];
  });
}

module.exports = Console;

