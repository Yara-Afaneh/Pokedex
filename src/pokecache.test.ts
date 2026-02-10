import { test, expect, describe } from "vitest";
import { Cache } from "./pokecache.js";

describe("Cache System", () => {
  test("should delete old entries after interval", async () => {
    const interval = 50; // 100 مللي ثانية فقط للاختبار السريع
    const cache = new Cache(interval);

    cache.add("test-key", { data: "hello" });
    expect(cache.get("test-key")).toEqual({ data: "hello" });

    await new Promise((resolve) => setTimeout(resolve, interval * 3));

    expect(cache.get("test-key")).toBeUndefined();
    cache.stopReapLoop();
  });
});
