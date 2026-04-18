import fs from "fs";
const path = "./tasks.json";

// buat file json
function loadTasks() {
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, JSON.stringify([]));
  }
  return JSON.parse(fs.readFileSync(path));
}

// simpan ke file
function saveTask(tasks) {
  fs.writeFileSync(path, JSON.stringify(tasks, null, 2));
}

// generate ID
function generateId(tasks) {
  return tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
}

// ambil command
const command = process.argv[2];
const arg1 = process.argv[3];
const arg2 = process.argv[4];

let tasks = loadTasks();

switch (command) {
  case "add":
    const newTask = {
      id: generateId(tasks),
      description: arg1,
      status: "todo",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    tasks.push(newTask);
    saveTask(tasks);
    console.log(`Task added (ID: ${newTask.id})`);
    break;

  case "update":
    const taskToUpdate = tasks.find(t => t.id == arg1);
    if (!taskToUpdate) {
      console.log("Task not found");
      break;
    } 

    taskToUpdate.description = arg2;
    taskToUpdate.updatedAt = new Date().toISOString();
    saveTask(tasks);
    console.log("Task updated");
    break;

  case "delete":
    tasks = tasks.filter(t => t.id != arg1);
    saveTask(tasks);
    console.log("Task deleted");
    break;

  case "mark-in-progress":
    updateStatus(arg1, "in-progress");
    break;

  case "mark-done":
    updateStatus(arg1, "done");
    break;

  case "list":
    if (!arg1) {
      console.table(tasks);
    } else {
      const filtered = tasks.filter(t => t.status === arg1);
      console.log(filtered);
    }
    break;

  default:
    console.log("Command tidak dikenali");
}

function updateStatus(id, status) {
  const task = tasks.find((t) => t.id == id);
  if (!task) return console.log("Task not found");

  task.status = status;
  task.updatedAt = new Date().toISOString();
  saveTask(tasks);

  console.log(`Task marked as ${status}`);
}
