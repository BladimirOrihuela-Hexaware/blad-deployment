require("dotenv").config();
const { execSync } = require("child_process");

const args = process.argv;
const token = process.env.NETLIFY_TOKEN;
const siteId = process.env.SITE_ID;

console.log(`token: ${token}, siteId: ${siteId}`);
//Puedo recibir aqui los tokens desde secrets.token.

console.log("args -->", args);
const tokenFromSecret = args[2];
const siteIDFromSecret = args[3];
console.log(
  `tokenFromSecret: ${tokenFromSecret}, siteIDFromSecret: ${siteIDFromSecret}`
);

const output = execSync(`bash scripts/deploy.sh ${token} ${siteId}`, {
  encoding: "utf-8",
});
console.log(output);
