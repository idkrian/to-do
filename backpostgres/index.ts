const express = require("express");
const cors = require("cors");
const app = express();
import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

//Configs
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

//Routes
app.post("/user", async (req: any, res: any) => {
  const { email } = req.body;
  const userData = {
    email,
  };
  try {
    const user = await prisma.user.create({
      data: {
        email: email,
      },
    });
    res.send(user);
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        res.send({
          message:
            "There is a unique constraint violation, a new user cannot be created with this email",
        });
      }
    }
  }
});
app.get("/user", async (req: any, res: any) => {
  const user = await prisma.user.findMany();
  res.send(user);
});
app.get("/user/:id", async (req: any, res: any) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      tasks: true, // All posts where authorId == 20
    },
  });
  res.send(user);
});
app.post("/task", async (req: any, res: any) => {
  const { title, description, date, userId } = req.body;
  const task = {
    title,
    description,
    date,
    userId,
  };
  const user = await prisma.task.create({
    data: task,
  });
  res.send(user);
});
app.put("/task/:id", async (req: any, res: any) => {
  const { id } = req.params;
  const { title, description, date, userId } = req.body;
  const task = {
    title,
    description,
    date,
    userId,
  };
  const user = await prisma.task.update({
    where: {
      id: Number(id),
    },
    data: task,
  });
  res.send(user);
});
app.delete("/task/:id", async (req: any, res: any) => {
  const { id } = req.params;
  const user = await prisma.task.delete({
    where: {
      id: Number(id),
    },
  });
  res.send(user);
});

//Port
app.listen(5000);
