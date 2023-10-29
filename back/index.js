const express = require("express");
const cors = require("cors");

const app = express();

//Configs
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

//Routes
const TaskRoutes = require("./routes/TaskRoutes");
const UserRoutes = require("./routes/UserRoutes");
app.use("/tasks", TaskRoutes);
app.use("/user", UserRoutes);

//Port
app.listen(5000);
