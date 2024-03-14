import fs from "node:fs/promises";
import http from "http";

const host = "localhost";
const port = 8000;

const errorPage = await fs.readFile("./404.html");
const aboutPage = await fs.readFile("./about.html");
const contactPage = await fs.readFile("./contact-me.html");
const indexPage = await fs.readFile("./index.html");

const requestListener = (request, response) => {
  switch (request.url) {
    case "/":
      response.writeHead(200);
      response.end(indexPage);
      break;
    case "/about":
      response.writeHead(200);
      response.end(aboutPage);
      break;
    case "/contact-me":
      response.writeHead(200);
      response.end(contactPage);
      break;
    default:
      response.writeHead(404);
      response.end(errorPage);
      break;
  }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server started`);
});
