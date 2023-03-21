import Task from "../models/task.model.js";
import { userTasks } from "./tasksDataSource.js";

let tasks = [];

const findUserTasks = (id) => {
    tasks = userTasks.find(ut => ut.id == id)
}


let id = 0;

const saveTask = ({ task }) => {
    if (task.length == 0 || task == "")
        return -1;

    let taskToSave = new Task(id++ , task, tasks.length);
    console.log(taskToSave);
    tasks.push(taskToSave);

    return taskToSave;
}

const findAll = () => {
    return tasks
}

const findOne = ({ id }) => {
    tasks.filter(t => t.id == id )
};

const deleteAll = () => {
    tasks = []
    return tasks;
};

const deleteOne = ({ id }) => {
    tasks = tasks.filter(task => task.id != id);
    return tasks;
}

export {
    saveTask,
    findAll,
    findOne,
    deleteAll,
    deleteOne,
    findUserTasks
}