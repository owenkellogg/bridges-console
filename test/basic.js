var Console = require(__dirname+'/../');

repl = new Console({
  loadDirectories: [
    __dirname+'/models'
  ]
});

console.log('Three classes have been loaded: Bridge, Account, Payment');
console.log('Try instantiating them now:');
console.log();
console.log('    var bridge = new Bridge()');
console.log('    bridge.build()');
console.log();

repl.start();

