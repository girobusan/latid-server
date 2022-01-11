import * as lserv from "./latid-server";
const TOML = require('@iarna/toml');
const ver = VERSION;
const open = require('open');
const fs = require('fs');
const path = require("path");
var argv = require('minimist')(process.argv.slice(2));
var portset = 9999;
//load settings
try{
  var settings = TOML.parse( fs.readFileSync(
    path.join("_config" , "settings.toml"),
    {encoding: 'utf8'}
  ) );
  console.log('Read settings.toml');


}catch{
  try{
    settings = JSON.parse( fs.readFileSync(
      path.join("_config" , "settings.json"),
      {encoding: 'utf8'}
    ) )
    console.log('Read settings.json');
    console.info("Looks like you're using settings.json file.")
    console.info("Consider to convert it to TOML format (see the docs).")
  }catch{
    throw("No settings file");
  }
}

console.log(settings);
console.log(settings.editor.local_server_port);

var portsetconf = settings.editor.local_server_port || "";
console.log("Port is" , portset)
if(portsetconf.match(/^\d\d+$/)){
  portset = parseInt(portsetconf);
}


//var port = argv.p || 9999;
//var site_dir = argv.d || process.cwd();
lserv.configure({
  port: argv.p || portset,
  root: argv.d || process.cwd()
})
lserv.start("Version: " + ver);
if(argv.b){
  setTimeout( ()=>open(lserv.getURL()) , 500);
}




