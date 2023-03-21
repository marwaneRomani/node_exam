import express from "express";
import { 
        saveTask,
        findAll,
        findOne,
        deleteAll,
        deleteOne } from "../services/task.service.js";

import { findUserTasks } from "../database/task.db.js";


const router = express.Router();


router.get("/", (req, res) => {
//    findUserTasks(req.session.user);

    let result = findAll();
    
    console.log(result);
    return res.status(200).send({ message: "success", data: result });
})

router.get("/:id", (req, res) => {
//    findUserTasks(req.session.user);

    const { id } = req.params;

    let result = findOne({ id });

    return res.status(200).send({ message: "success", data: result });
})


router.post("/", (req, res) => {
    console.log(req.session.user);
//    findUserTasks(req.session.user);

    console.log(req.body);
    if (req.body.task == undefined) {
        return res.status(400).send({ message: "failed", reason: "bad request" })

    }

    const { task } = req.body;
        
    let result = saveTask({ task });

    if (result == -1) {
        return res.status(400).send({ message: "failed", reason: "bad request" })
    }

    return res.status(200).send(result);
})

router.delete("/", (req, res) => {
//    findUserTasks(req.session.user);

    let result = deleteAll();

    return res.status(200).send({ message: "success", data: result });
})

router.delete("/:id", (req, res) => {
//    findUserTasks(req.session.user);

    const { id } = req.params;

    let result = deleteOne({ id });  

    return res.status(200).send({ message: "success", data: result });
})


router.put("/", (req, res) => {

    
})


export default router;