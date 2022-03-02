const { exec } = require("child_process");
const { readFileSync, writeFileSync, appendFileSync } = require("fs");

const myArgs = process.argv.slice(2);

exec("git rev-parse --abbrev-ref HEAD", (error, stdout, stderr) => {
  if (error || stderr) {
    return;
  }

  if (!+ticketNumber) return; //retukey not start by number
  const ticketNumber = stdout.split("-")[0];

  const NOT_TICKETS_ID = ["dev", "master"];

  if (!ticketNumber || NOT_TICKETS_ID.includes(String(ticketNumber).trim())) return;

  const commitMessage = readFileSync(myArgs[0]);
  writeFileSync(myArgs[0], `${ticketNumber} `);
  appendFileSync(myArgs[0], commitMessage);
});
