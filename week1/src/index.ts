import { addTask, completeTask, getTasks, removeTask } from "./taskService.js";

console.log(addTask({title: "sample1"}))
console.log(addTask({title: "sample2"}))

completeTask(1);
console.log(getTasks())

removeTask(1);
console.log(getTasks())
console.log(removeTask(999))