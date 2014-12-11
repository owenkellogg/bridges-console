var Console = require(__dirname+'/../build');

repl = new Console({
  loadDirectories: [
    __dirname+'/models'
  ]
});

repl.start();

