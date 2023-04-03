import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();

export const server = createServer((req, res) => {
  res.statusCode = 200;
  res.end(
    `Hello, my name is ${chance.name()} and i am ${chance.age()} years old. i am a ${chance.profession()}.`
  );
});
