import { server } from "./server.js";

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server running on Port: http://localhost:${PORT}`);
});
