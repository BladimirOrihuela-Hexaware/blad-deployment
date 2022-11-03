require("dotenv").config();
const { execSync } = require("child_process");

const token = process.env.NETLIFY_TOKEN;
const siteId = process.env.SITE_ID;

console.log(token, siteId);

const output = execSync(`bash scripts/deploy.sh ${token} ${siteId}`, {
  encoding: "utf-8",
});
console.log(output);
