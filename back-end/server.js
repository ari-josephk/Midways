#!/usr/bin/env node
require("dotenv").config();

const server = require("./app");
const port = process.env.PORT || 80;

const listener = server.listen(port, function() {
  console.log(`Server running on port: ${port}`)
});

const close = () => {
  listener.close()
}
module.exports = {
  close: close,
}
