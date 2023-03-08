const { v4: uuid } = require("uuid");
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;

const logEvents = async (message, logName) => {
  const dateTime = new Date().toLocaleString();
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "logs", logName),
      logItem,
      { encoding: "utf8" }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = { logEvents };
