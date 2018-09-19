const Parse = require('parse/node');

const APP_ID = "ReactDatabase";
const MASTER_KEY = "ReactDatabase123456";
const PARSE_SERVER = "http://localhost:1337/parse";

class ParseEnviroment{
    
  constructor (){
    Parse.initialize(APP_ID, MASTER_KEY, MASTER_KEY);
    Parse.serverURL = PARSE_SERVER;
  }

  getParse(){
    return Parse;
  }

}

module.exports = ParseEnviroment;
