import type { Task, CreateTaskInput } from "./types.js"

const tasks: Task[] = [];
let nextId = 1;

export function addTask(input: CreateTaskInput): Task {
    const newTask: Task = {
        id: nextId,
        title: input.title, 
        status: "todo",
        createdAt: new Date(),
    };
    
    tasks.push(newTask);
    nextId += 1;
    return newTask;
}

export function getTasks(): readonly Task[] {
    return tasks;
}