const router = require("express").Router();
const TaskController = require("../controllers/TaskController");

// router.post("/", TaskController.create);
router.get("/", TaskController.getAll);
router.get("/:id", TaskController.getOne);
router.put("/:userId/:taskId", TaskController.edit);
router.delete("/:userId/:taskId", TaskController.delete);
router.post("/:id", TaskController.create);

module.exports = router;
