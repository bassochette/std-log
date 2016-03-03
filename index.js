"use strict";

let logger = (msg, err) => {
  if (err) {
    process.stderr.write(msg);
  } else {
    process.stdout.write(msg);
  }
};

module.exports = logger;
