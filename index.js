import express from "express"
import {addTask, getAllTasks} from "./taskManager.js"

const app = express();
const PORT = 3000;

const mainPage = app.route(["/", "/home", "/main", "/index"]);
const allPage = app.route(["/feed", "/all", "/task", "/tasks"]);
const loginPage = app.route(["/login"]);

app.use(express.static("public"));
app.use(express.urlencoded( { extended: true } ));

app.get("/tasks", (req, res) => {
    res.render("tasks.ejs", {
        tasks: getAllTasks()
    });
})

app.post("/add", (req, res) => {
    console.log("Added task")
    const newTask = req.body.task;
    if (newTask) {
        console.log(newTask);
        addTask(newTask);
    }
    console.log(getAllTasks());
    res.redirect("/tasks");
})

app.post("/delete", (req, res) => {
    const taskIndex = req.body.taskIndex;
    console.log(taskIndex);
    if (taskIndex !== undefined) {
        deleteTask(taskIndex);
    }
    res.redirect("/tasks");
})

app.listen(PORT, () => {
    console.log(`Server is runnning on port ${PORT}`);
});

