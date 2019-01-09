const http = require('http');
const Database = require('./src/database');
let database = new Database();

let server = http.createServer((req, res) => {
  if (req.url.slice(0,5) === "/get?") {
    let key = req.url.slice(5);
    let value = database.get(key);
    if (value !== undefined) {res.write(value)}
  } else if (req.url.slice(0,5) === "/set?") {
    let key, value;
    [key, value] = req.url.slice(5).split('=');
    database.set(key, value);
    res.write("set");
  }
  res.end();
});

server.listen(4000, (err) => {
  if (err) {
    console.log("Error", err)
  } else {
    console.log("Connected to server!")
  }
});
