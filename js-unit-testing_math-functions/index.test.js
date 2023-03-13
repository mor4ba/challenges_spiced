import { add } from "./index.js";
import { subtract } from "./index.js";
import { multiply } from "./index.js";
import { divide } from "./index.js";

test("add returns 5 if called with add(2,3) ", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test("add returns a negative value when greater argument is negative ", () => {
  const result = add(1, -4);
  expect(result).toBeLessThan(1);
});

test("add returns a value close to 0.3 if called with add(0.2, 0.1) ", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

test("Substract returns 10 if called with substract(15,5", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("substrat returns a negative value if the second argument is greater than the first one", () => {
  const result = subtract(20, 30);
  expect(result).toBeLessThan(0);
});

test("multiply returns 8 if called with multiply(2,4", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});

test("multiply returns a negative value if only the first argument is negative", () => {
  const result = multiply(-2, 5);
  expect(result).toBeLessThan(0);
});

test("multiply returns a positive Value if called with 2 negative arguments ", () => {
  const result = multiply(-1, -6);
  expect(result).toBeGreaterThan(0);
});

test("divide returns 3 if called with divide(9,3)", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});

test("divide returns 'You shouldnt do this!', if called with 0 as second argument", () => {
  const result = divide(9, 0);
  expect(result).toBe("You should not do this!");
});
