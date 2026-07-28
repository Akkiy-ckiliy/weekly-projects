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

export function completeTask(id: number): Task | undefined {
    const task = tasks.find((currentTask) => currentTask.id === id);

    if (task === undefined){
        return undefined;
    }

    task.status = "done";

    return task;
}

export function removeTask(id: number): Task | undefined {
    const index = tasks.findIndex((currentIndex) => currentIndex.id === id)

    if (index === -1)
        return undefined

    const deletedTasks = tasks.splice(index, 1)
    return deletedTasks[0]
}