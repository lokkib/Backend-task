const http = require("http");
const getUsers = require("./modules/users");

const server = http.createServer((request, response) => {
  if (request.url != "/favicon.ico") {
    const url = new URL(request.url, "http://127.0.0.1:3003");
    const helloRequest = url.searchParams.has("hello");
    const name = url.searchParams.get("hello");
    const users = url.searchParams.has("users");

    if (helloRequest) {
      if (name) {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write(`Hello,${name}`);
        response.end();
      } else if (!name) {
        response.writeHead(400, { "Content-Type": "text/plain" });
        response.write("Enter a name");
        response.end();
      }
    } else if (users) {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.write(getUsers());
      response.end();
    } else if (request.url === "/") {
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.write("Hello, World!");
      response.end();
    } else if (url.searchParams !== "hello" && url.searchParams !== "name") {
      response.writeHead(500, { "Content-Type": "text/plain" });
      response.write("");
      response.end();
    }
  }
});

server.listen(3003, () => {
  console.log("Сервер запущен по адресу http://127.0.0.1:3003");
});
