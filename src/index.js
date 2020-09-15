
import * as lserv from "./latid-server";
const ver = VERSION;
var argv = require('minimist')(process.argv.slice(2));
console.log(argv);
var port = argv.p || 9999;
var site_dir = argv.d || process.cwd();
lserv.configure({
    port: port,
    root: site_dir
})
lserv.start();




