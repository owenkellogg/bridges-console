
# Bridges Console

Embedded REPL (Read Eval Print Loop) interactive command line console for Node.js. Users can load classes into the console as global objects for simple interactivity withing a Node.js application. This project is inspired by the incredible usefulness of Rails console, and written for use in Gatewayd (https://gatewayd.org)

## Installation

    npm install --save bridges-console

## Usage

Global objects set in the console's process before instantiation will become available in the interactive console at run time, for example:

    var Console = require('bridges-console');

    global.MyApp = {
      database: {
        connected: false,
        type: 'postgres'
      },
      config: { version: '1.0.1' }
    }

    myAppConsole = new Console;
    myAppConsole.start();

calling `start()` will start the REPL and drop you into the interacive console:

    console> MyApp.config.version; 

which will output the following:

    console> '1.0.1'

#### Options

- loadDirectories: [ArrayOfDirectoryPaths]
    
  Bridges Console includes a tool to load classes from a directory using an opinionated naming scheme that converts the file name from snake case to camel case, then capitalises the first letter, an finally exports the class with its newly computed name to the global namespace.

- prompt: String

  Will set the name of the prompt displayed

#### Exiting

    console> exit 
    
