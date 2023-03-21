import { apiUrl } from "../constants/const.js";

const getTasks = () => {
    return new Promise((resolve, reject) => {
        fetch(apiUrl)
        .then((response) => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    });
}


const saveTask = ({ task }) => {
    return new Promise((resolve, reject) => {
        fetch(apiUrl, {
                        method:"POST",
                        body:JSON.stringify({ task }),
                        headers:{
                            "Content-Type":"application/json"
                        }
                    })
        .then((response) => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    });
}



const deleteTasks = () => {
    return new Promise((resolve, reject) => {
        fetch(apiUrl, { method: 'DELETE'})
        .then((response) => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    });
}

const deleteTask = (id) => {
    return new Promise((resolve, reject) => {
        fetch(apiUrl + `/${id}`, { method: 'DELETE'})
        .then((response) => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    });
}




export { 
    getTasks,
    saveTask,
    deleteTasks,
    deleteTask
}