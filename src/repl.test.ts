import { cleanInput } from "./repl";
import { describe, expect, test } from "vitest";

describe.each([
  {
    input: "  hello  world  ",
    expected: ["hello", "world"],
  },
  {
    input: "HELLO",
    expected: ["hello"],
  },
  {
    input: "   ",
    expected: [],
  },
  {
    input: "TypeScript   Is   Awesome",
    expected: ["typescript", "is", "awesome"],
  }
])
("cleanInput('$input')", ({ input, expected }) => {
  test(`should return ${JSON.stringify(expected)}`, () => {
   
    const actual = cleanInput(input);

   
    expect(actual).toHaveLength(expected.length);
    
  
    for (const i in expected) {
      expect(actual[i]).toBe(expected[i]);
    }
  });
});