const yargs = require("yargs");
const {hideBin} = require("yargs/helpers");

const arr = hideBin(process.argv);
const {argv} = yargs(arr);
console.log(argv);

if(argv.action === "add-product"){
    const newProduct = {
        name: argv.name,
        price: argv.price
    }
}