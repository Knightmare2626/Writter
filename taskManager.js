let taskList = [];

export function addTask(task) {
    taskList.push(task);
}

export function getAllTasks() {
    return taskList;
}

export function deleteTask(taskIndex) {
    taskList.splice(taskIndex, 1);
}