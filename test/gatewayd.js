var Console = require(__dirname+'/../');

if (!process.env.GATEWAYD_PATH) {
  throw new Error('GATEWAYD_PATH must be set in Environment');
}

global.Gatewayd = require(process.env.GATEWAYD_PATH);

var repl = new Console({
  prompt: 'gatewayd',
  loadDirectories: [
    process.env.GATEWAYD_PATH+'/lib/data/models'
  ]
});

repl.start();

