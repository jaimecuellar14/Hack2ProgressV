const { server } = require("./server");
const { controller } = require("./controller");

const gridController = new controller("grid");
const agricultorController = new controller("agricultor");
const cultivoAgricultorController = new controller("cultivo_agricultor");
const cultivoJuegoController = new controller("cultivo_juego");

server.on("request", function(req, res) {
  let body = null;
  req.on("data", data => {
    body += data;
  });
  req.on("end", async function() {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });
    const data = await handlerRequest(req.url, req.method, body);
    res.write(JSON.stringify(data));
    res.end();
  });
});
server.listen(8080);

const handlerRequest = async function(path, method, data = undefined) {
  const body = data ? JSON.parse(data) : [];
  const paths = path.split("/");
  const recurso = paths[1];
  const element = paths[paths.length - 1];
  switch (recurso) {
    case "grid":
      return await gridController.handleRequest(element, method, body);
    case "agricultor":
      return await agricultorController.handleRequest(element, method, body);
    case "cultivo_agricultor":
      return await cultivoAgricultorController.handleRequest(
        element,
        method,
        body
      );
    case "cultivo_juego":
      return await cultivoJuegoController.handleRequest(element, method, body);
    default:
      break;
  }
};
