const {program} = require("commander");

program
    .option("-a, --action <type>", "action type")
    .option("-u, --update", "update product")
    .option("-p, --price [type]", "product price")

program.parse(process.argv);

const options = program.opts();

console.log(options);

if(options.action === "add"){
    
}