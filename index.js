const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  let url = req.url;
  if (url === "/") {
    fs.readFile("./index.html", "utf-8", function (err, html) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(html);
    });
  } else if (url === "/about") {
    fs.readFile("./about.html", "utf-8", function (err, html) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(html);
    });
  } else if (url === "/contact-me") {
    fs.readFile("./contact-me.html", "utf-8", function (err, html) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(html);
    });
  } else {
    fs.readFile("./404.html", "utf-8", function (err, html) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end(html);
    });
  }
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
