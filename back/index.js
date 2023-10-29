const express = require("express");
const cors = require("cors");

const app = express();

//Configs
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

//Routes
const TaskRoutes = require("./routes/TaskRoutes");
const AuthRoutes = require("./routes/AuthRoutes");
app.use("/tasks", TaskRoutes);
app.use("/auth", AuthRoutes);

//Port
app.listen(5000);
