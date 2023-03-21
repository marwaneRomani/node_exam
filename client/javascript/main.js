import { deleteTasks, getTasks, saveTask } from "./apis/tasksApi.js";
import { task, submit, reset, resetData } from "./constants/const.js";
import { resetTask, isValidTask,renderTasks  } from "./utils/utils.js";


reset.addEventListener("click", e => resetTask(task));

submit.addEventListener("click", e => {
    
    if (!isValidTask(task)) {
        console.log("not valid");
        return;
    }
    
    console.log("saving task");
    saveTask({ task: task.value })
        .then(data => {
            console.log(data);
            renderTasks({ id: data.id, task: data.task, order: data.order })
        })
    })


task.addEventListener("change", e => { 
    task.classList.remove("error")
})


window.addEventListener("load",  e => {
     getTasks()
     .then(data => {
        console.log(data);
        data.data.forEach(task => {
            renderTasks({ id: task.id, task: task.task, order: task.order })
        });
     });
})

resetData.addEventListener("click", e => {
    e.preventDefault();
    deleteTasks()
        .then(data => console.log(data))
        .catch(err => console.log(err));
})