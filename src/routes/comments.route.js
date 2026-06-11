const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comment.controller");

router.get("/", commentController.getAll);
router.get("/:id", commentController.getOne);
router.post("/", commentController.createOne);
router.put("/:id", commentController.updateOne);
router.delete("/:id", commentController.deleteOne);

module.exports = router;
