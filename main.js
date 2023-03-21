import express from "express";
import { config } from "dotenv";
import session from "express-session";
import taskRouter from "./routes/task.route.js";
import { userTasks } from "./database/tasksDataSource.js";

config();
const port = process.env.PORT || 4002;
const app = express();
app.use(express.json());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { 
      httpOnly: true
    }
}))

let users = 0;

app.use(express.static("./client"))

app.use((req,res,next) => {
    
    if (req.session.user == undefined) {
         let id = users++;

         req.session.user = id;
         userTasks.push[{ id: id, tasks: [] }];         
         
         next();
    }
    else {
        next();
    }
});


app.use("/task", taskRouter);


app.use((req,res)=>{
    res.status(404).json({message:"404 not found"})
})

app.listen(port, () => console.log(`server running on port ${port}`));
