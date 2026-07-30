import { beforeEach, describe, expect, test } from "vitest";
import { addTask, completeTask, getTasks, initializeTasks } from "./taskService.js";

beforeEach(() => {
  initializeTasks([]);
});

describe("addTask", () => {

  test("新しいtodoタスクを作成する", () => {
    const task = addTask({ title: "test" });

    expect(task.id).toBe(1);
    expect(task.title).toBe("test");
    expect(task.status).toBe("todo");
  });

  test("タスクを追加するたびにIDが増える", () => {
    const task1 = addTask({ title: "test1" });
    const task2 = addTask({ title: "test2" });

    expect(task1.id).toBe(1);
    expect(task2.id).toBe(2);
  });
});

describe("getTasks", () => {

  test("タスク配列を取得", () => {
    const task1 = addTask({ title: "test1" });
    const task2 = addTask({ title: "test2" });

    expect(getTasks().length).toBe(2);
  });
});

describe("completeTask", () => {

  test("指定したタスクを完了状態にする", () => {
    const task1 = addTask({ title: "test1" });
    const completedTask = completeTask(task1.id);
    expect(completedTask).toBeDefined();
    expect(completedTask?.status).toBe("done");
  });

  test("存在しないIDを指定した場合、undefinedを返す", () => {
    expect(completeTask(100)).toBeDefined();
  })
});
