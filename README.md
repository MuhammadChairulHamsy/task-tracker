# 📝 Task CLI Tracker

A simple Command Line Interface (CLI) application to manage and track your daily tasks.
This project is built using **Node.js** and stores data locally in a JSON file.

---

## 🚀 Features

* Add new tasks
* Update existing tasks
* Delete tasks
* Mark tasks as **in-progress** or **done**
* List all tasks
* Filter tasks by status:

  * `todo`
  * `in-progress`
  * `done`

---

## 📦 Requirements

Make sure you have installed:

* Node.js (v14 or higher recommended)

---

## ⚙️ Installation

1. Clone this repository:

```bash
git clone https://github.com/MuhammadChairulHamsy/task-cli.git
cd task-cli
```

2. (Optional) Initialize npm:

```bash
npm init -y
```

---

## ▶️ Usage

Run the CLI using:

```bash
node task-cli.js <command> [arguments]
```

---

## 📌 Commands

### ➕ Add a new task

```bash
node task-cli.js add "Buy groceries"
```

---

### ✏️ Update a task

```bash
node task-cli.js update 1 "Buy groceries and cook dinner"
```

---

### ❌ Delete a task

```bash
node task-cli.js delete 1
```

---

### 🔄 Mark task as in progress

```bash
node task-cli.js mark-in-progress 1
```

---

### ✅ Mark task as done

```bash
node task-cli.js mark-done 1
```

---

### 📋 List all tasks

```bash
node task-cli.js list
```

---

### 🔍 Filter tasks by status

```bash
node task-cli.js list todo
node task-cli.js list in-progress
node task-cli.js list done
```

---

## 🗂️ Task Structure

Each task is stored with the following properties:

```json
{
  "id": 1,
  "description": "Buy groceries",
  "status": "todo",
  "createdAt": "2026-01-01T10:00:00.000Z",
  "updatedAt": "2026-01-01T10:00:00.000Z"
}
```

---

## 📁 Data Storage

* All tasks are stored in a local file:

```
tasks.json
```

* The file will be created automatically if it does not exist.

---

## ⚠️ Notes

* Make sure to provide valid task IDs when updating or deleting.
* Commands are case-sensitive.
* Do not manually edit `tasks.json` while the program is running.

---

## 🛠️ Future Improvements

* Add search functionality
* Add pagination
* Convert to global CLI command (`npm link`)
* Add colored output in terminal

---

## 👨‍💻 Author

Developed by **Hamsy**

---

## 📄 License

This project is open-source and free to use.
