"use strict";

var repl = require("repl");
var requireAll = require("require-all-to-camel");

var Console = (function () {
  var Console = function Console(options) {
    this.prompt = options.prompt || "console";
    this.directories = options.loadDirectories;

    this.loadDirectories(options.loadDirectories);
  };

  Console.prototype.loadDirectories = function (directories) {
    var _this = this;
    if (directories && directories.length > 0) {
      directories.forEach(_this.loadDirectory);
    }
  };

  Console.prototype.loadDirectory = function (path) {
    globalize(requireAll(path));
  };

  Console.prototype.start = function () {
    var _this = this;
    repl.start({
      useGlobal: true,
      prompt: _this.prompt + "> "
    });
  };

  return Console;
})();

function capitaliseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function globalize(object) {
  Object.keys(object).forEach(function (key) {
    global[capitaliseFirstLetter(key)] = object[key];
  });
}

module.exports = Console;