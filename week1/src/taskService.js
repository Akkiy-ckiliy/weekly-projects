const tasks = [];
let nextId = 1;
export function addTask(input) {
    const newTodo = {
        id: nextId,
        title: input.title,
        status: "todo",
        createdAt: new Date(),
    };
    tasks.push(newTodo);
    nextId += 1;
    return newTodo;
}
//# sourceMappingURL=taskService.js.map