import { server } from "./server.js";

const PORT = 3030;
server.listen(PORT, () => {
  console.log(`Server running in PORT: http://localhost:${PORT}`);
});
