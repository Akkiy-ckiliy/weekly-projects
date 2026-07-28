import {
  addTask,
  completeTask,
  getTasks,
  initializeTasks,
  removeTask,
} from "./taskService.js";
import { loadTasks, saveTasks } from "./taskStorage.js";

const loadedTasks = await loadTasks();
initializeTasks(loadedTasks);

const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case "add": {
    const title = args[1];
    if (title === undefined) {
      console.log("titleを入力してください");
    } else {
      const addedTask = addTask({ title });
      await saveTasks(getTasks());
      console.log(addedTask);
    }
    break;
  }

  case "list": {
    console.log(getTasks());
    break;
  }

  case "complete": {
    const idText = args[1];
    if (idText === undefined) {
      console.log("IDを入力してください");
      break;
    }
    const id = Number(idText);
    if (Number.isNaN(id)) {
      console.log("有効なIDを入力してください");
      break;
    }
    const completedTask = completeTask(id);
    if (completedTask === undefined) {
      console.log("そのIDのタスクはありません");
      break;
    }
    await saveTasks(getTasks());
    console.log(completedTask);
    break;
  }

  case "remove": {
    const idText = args[1];
    if (idText === undefined) {
      console.log("IDを入力してください");
      break;
    }
    const id = Number(idText);
    if (!Number.isInteger(id) || id <= 0) {
      console.log("有効なIDを入力してください");
      break;
    }
    const removedTask = removeTask(id);
    if (removedTask === undefined) {
      console.log("そのIDのタスクはありません");
      break;
    }
    await saveTasks(getTasks());
    console.log(
      `削除しました:\nid: ${removedTask.id}, title: ${removedTask.title}, status: ${removedTask.status}`,
    );
    break;
  }

  default: {
    console.log("使用できるコマンド: add, list, complete, remove");
    break;
  }
}
