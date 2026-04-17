import fs from "fs";
const path = "./tasks.json";

// buat file json
function loadTask() {
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, JSON.stringify([]));
  }
  return JSON.parse(fs.readFileSync(path));
}

// simpan ke file
function saveTask(tasks) {
  return tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
}

saveTask();
loadTask();
