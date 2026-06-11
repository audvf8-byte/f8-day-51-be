const express = require("express");
const router = express.Router();
const postController = require("../controllers/post.controller");

router.get("/", postController.getAll);
router.get("/:id", postController.getOne);
router.post("/", postController.createOne);
router.put("/:id", postController.updateOne);
router.delete("/:id", postController.deleteOne);

module.exports = router;
