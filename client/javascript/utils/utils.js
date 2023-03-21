import { deleteTask } from "../apis/tasksApi.js";
import { table } from "../constants/const.js";

const resetTask = (taskInput) => {
    taskInput.value = "";
}

const isValidTask = task => {
    return task.value != ""
};

const renderTasks = ({ id, task, order }) => {
    {
        let tr = document.createElement("tr",);

        let taskId = document.createElement("td");
        let taskTodo = document.createElement("td");
        let taskOrder = document.createElement("td");
        let del = document.createElement("td");
        let swapUp = document.createElement("td");
        let swapDown = document.createElement("td");


    
        let deleteBtn = createHtmlElement("button", {"class" : "button-delete"}, "delete")

        del.appendChild(deleteBtn);
    

        let swapUpBtn = createHtmlElement("button", {"class" : "button-swap"}, "swapUp")
        let swapDownBtn = createHtmlElement("button", {"class" : "button-swap"}, "swapDown")

        swapDown.appendChild(swapDownBtn);
        swapUp.appendChild(swapUpBtn);
        
        taskId.innerText = id;
        taskTodo.innerText = task;
        taskOrder.innerText = order;
        
    
        tr.append(taskId,taskTodo,taskOrder,del, swapUp, swapDown);
    


        deleteBtn.addEventListener("click", e => {
            deleteTask(id)
                .then(data => tr.remove());
        })

        
        swapUpBtn.addEventListener("click", e => {
            
        })


        swapDownBtn.addEventListener("click", e => {

        })


        table.appendChild(tr);
    }
}


const createHtmlElement = (tagName , attributes = {}, content = null) => {
    const element = document.createElement(tagName);

    element.innerText = content;
    
    for (const [attribute, value] of Object.entries(attributes)) {
        if (value != false && value != null) 
            element.setAttribute(attribute, value);
    }
    
    return element;
}



export {
    resetTask,
    isValidTask,
    renderTasks
}