var Console = require(__dirname+'/console');

global._ = require('lodash');
global.Promise = require('bluebird');

Object.defineProperty(global, "exit", {
  get: function(){
    console.log('Exiting console... au revior!');
    process.exit(0);
  }
});

module.exports = Console;

