
import * as lserv from "./latid-server";
const ver = VERSION;
const open = require('open');
var argv = require('minimist')(process.argv.slice(2));
//var port = argv.p || 9999;
//var site_dir = argv.d || process.cwd();
lserv.configure({
    port: argv.p || 9999,
    root: argv.d || process.cwd()
})
lserv.start("Version: " + ver);
if(argv.b){
    setTimeout( ()=>open(lserv.getURL()) , 500);
}




