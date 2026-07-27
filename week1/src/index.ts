import { addTask, completeTask, getTasks } from "./taskService.js";

console.log(addTask({title: "sample1"}))
console.log(addTask({title: "sample2"}))

completeTask(1);
console.log(getTasks())