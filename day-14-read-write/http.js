const http = require("http");
const fs = require("fs");

const userList = [{ name: "debug" }, { name: "shincy" }, { name: "rijo" }];

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
  switch (req.url) {
    case "/":
      fs.readFile("index.html", "utf8", (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
      break;
    case "/product":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(userList));
      break;

    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Page not found");
      break;
  }
});

const PORT = 3005;
server.listen(PORT, () => console.log(`Server Started in ${PORT}`));
