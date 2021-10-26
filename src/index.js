
import * as lserv from "./latid-server";
const ver = VERSION;
const open = require('open');
const fs = require('fs');
const path = require("path");
var argv = require('minimist')(process.argv.slice(2));
var portset = 9999;
//laod settings
try{
  var settings = fs.readFileSync(
    path.join("_config" , "settings.json"),
    {encoding: 'utf8'}
  )
  portset = JSON.parse(settings).editor.local_server_port;
}catch{
  console.log("No setting in settings file");
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



 
