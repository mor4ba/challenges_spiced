import { createServer } from "node:http";

export const server = createServer((req, res) => {
  //   switch ((req, res)) {
  //     case req.url === "/api/fish/1":
  //       res.statusCode = 200;
  //       res.end("Shrimp");
  //       console.log(req);
  //       break;
  //     case req.url === "/api/fish/2":
  //       res.statusCode = 200;
  //       res.end("Aneomnefish");
  //       break;
  //     default:
  //       res.statusCode = 404;
  //       res.end("Not found");
  //       console.log(req);
  //   }

  if (req.url === "/api/fish/1") {
    res.statusCode = 200;
    res.end("Shrimp");
    console.log(req);
  } else if (req.url === "/api/fish/2") {
    res.statusCode = 200;
    res.end("Aneomnefish");
  } else {
    res.statusCode = 404;
    res.end("not Found, haha.");
  }
});
