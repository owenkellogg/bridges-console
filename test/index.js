var Console = require(__dirname+'/../build');
var repl;

if (process.env.GATEWAYD_PATH) {

  global.Gatewayd = require(process.env.GATEWAYD_PATH);
  repl = new Console({
    prompt: 'gatewayd',
    loadDirectories: [
      process.env.GATEWAYD_PATH+'/lib/data/models'
    ]
  });

} else {

  repl = new Console({
    loadDirectories: [
      __dirname+'/models'
    ]
  });

}

repl.start();

