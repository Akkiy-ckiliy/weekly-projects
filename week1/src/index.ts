import { addTask, getTasks } from "./taskService.js";

console.log(addTask({title: "sample1"}))
console.log(addTask({title: "sample2"}))

console.log(getTasks())