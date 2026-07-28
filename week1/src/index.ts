import { addTask, completeTask, getTasks, removeTask } from "./taskService.js";

const args = process.argv.slice(2);
const command = args[0];
const title = args[1];

if (command === "add") {
    if (title === undefined){
        console.log("titleを入力してください");
    } else {
        const addedTask = addTask({title});
        console.log(addedTask);
    }
}

if (command === "list") {
    console.log(getTasks())
}