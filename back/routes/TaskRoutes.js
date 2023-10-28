const router = require("express").Router();
const TaskController = require("../controllers/TaskController");

router.post("/", TaskController.create);
router.get("/", TaskController.getAll);
router.get("/:id", TaskController.getOne);
router.put("/:id", TaskController.edit);
router.delete("/:id", TaskController.delete);

module.exports = router;
