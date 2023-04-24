import fs from "fs";

let bufferData = fs.readFileSync("./json01.json");
console.log(bufferData);
let jsonData = bufferData.toString();
console.log(jsonData);

let parsedData = JSON.parse(jsonData);
console.log(parsedData);

parsedData.name = "Harish S";
parsedData.planet = "Mars";
parsedData.age = 26;

console.log(parsedData);

const modifiedJSONData = JSON.stringify(parsedData);
console.log(modifiedJSONData);

fs.writeFileSync("json01.json", modifiedJSONData);
