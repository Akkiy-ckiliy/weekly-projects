import { readFile, writeFile } from "node:fs/promises";
import type { Task } from "./types.js";

export async function saveTasks(tasks: readonly Task[]): Promise<void> {
  const json = JSON.stringify(tasks, null, 2);
  await writeFile("tasks.json", json, "utf8");
}

export async function loadTasks(): Promise<Task[]> {
  try {
    const json = await readFile("./tasks.json", "utf8");
    const loadedTasks: Task[] = JSON.parse(json);
    return loadedTasks;
  } catch (error) {
    const fileError = error as NodeJS.ErrnoException;
    if (fileError.code === "ENOENT") return [];
    throw error;
  }
}
