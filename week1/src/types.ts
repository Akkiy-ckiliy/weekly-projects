export type TaskStatus = "todo" | "done";

export interface Task {
    id: number,
    title: string,
    status: TaskStatus,
    createdAt: Date
}

export type CreateTaskInput = {
    title: string
}