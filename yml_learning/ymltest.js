const { parse, stringify } = require("yaml");
const { readFileSync } = require("fs");

const data = readFileSync("test.yaml", "utf-8");
console.log(parse(data));
