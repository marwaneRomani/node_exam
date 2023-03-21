import { saveTask as save,
         findAll as findAllTasks,
         findOne as findTask,
         deleteAll as deleteAllTasks,
         deleteOne as deleteTask
       }    
    from "../database/task.db.js"

const saveTask = ({ task }) => {
    if (task == "" || task == undefined)
        return -1;

    return save({ task });
}

const findAll = () =>  findAllTasks();

const findOne = ({ id }) =>  findTask({ id });


const deleteAll = () =>  deleteAllTasks();

const deleteOne = ({ id }) =>  deleteTask({ id });


export {
    saveTask,
    findAll,
    findOne,
    deleteAll,
    deleteOne
}