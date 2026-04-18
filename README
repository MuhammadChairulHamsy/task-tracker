# Task Tracker CLI

A simple command-line task manager that stores tasks in a local `tasks.json` file.

---

## Requirements

- [Node.js](https://nodejs.org/) v14 or higher

---

## Installation

1. Clone or download this repository.
2. Navigate to the project folder:

```bash
cd task-tracker
```

3. No additional dependencies are required — only Node.js built-in modules are used.

---

## Usage

Run the program using:

```bash
node task-tracker.js <command> [arguments]
```

---

## Commands

### Add a Task

```bash
node task-tracker.js add "Your task description"
```

**Example:**

```bash
node task-tracker.js add "Buy groceries"
# Output: Task added (ID: 1)
```

---

### Update a Task

```bash
node task-tracker.js update <id> "New description"
```

**Example:**

```bash
node task-tracker.js update 1 "Buy groceries and cook dinner"
# Output: Task updated
```

---

### Delete a Task

```bash
node task-tracker.js delete <id>
```

**Example:**

```bash
node task-tracker.js delete 1
# Output: Task deleted
```

---

### Mark a Task as In Progress

```bash
node task-tracker.js mark-in-progress <id>
```

**Example:**

```bash
node task-tracker.js mark-in-progress 1
# Output: Task marked as in-progress
```

---

### Mark a Task as Done

```bash
node task-tracker.js mark-done <id>
```

**Example:**

```bash
node task-tracker.js mark-done 1
# Output: Task marked as done
```

---

### List Tasks

List all tasks:

```bash
node task-tracker.js list
```

List tasks by status (`todo`, `in-progress`, or `done`):

```bash
node task-tracker.js list <status>
```

**Examples:**

```bash
node task-tracker.js list
node task-tracker.js list todo
node task-tracker.js list in-progress
node task-tracker.js list done
```

---

## Task Properties

Each task contains the following fields:

| Field         | Description                              |
|---------------|------------------------------------------|
| `id`          | Unique identifier (auto-incremented)     |
| `description` | Task description                         |
| `status`      | Current status: `todo`, `in-progress`, or `done` |
| `createdAt`   | Timestamp when the task was created      |
| `updatedAt`   | Timestamp when the task was last updated |

---

## Data Storage

All tasks are saved in a `tasks.json` file in the same directory as the script. The file is created automatically on first run.

---

## Notes

- Task IDs are assigned automatically and increment sequentially.
- If a task ID does not exist, the program will display `Task not found`.
- Unrecognized commands will display `Command tidak dikenali`.