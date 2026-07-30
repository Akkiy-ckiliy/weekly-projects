import { beforeEach, describe, expect, test } from "vitest";
import { addTask, initializeTasks } from "./taskService.js";

describe("addTask", () => {
  beforeEach(() => {
    initializeTasks([]);
  });

  test("新しいtodoタスクを作成する", () => {
    const task = addTask({ title: "test" });
    expect(task.id).toBe(1);
    expect(task.title).toBe("test");
    expect(task.status).toBe("todo");
  });
});
