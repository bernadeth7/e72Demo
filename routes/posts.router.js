const express = require ("express");
const router = express.Router();

//controller
const postsController = require('../controller/posts.controller.js')

//routes
router.get("/",postsController.getAll);
router.post("/",postsController.create);
router.get("/:id",postsController.getById);
router.put("/:id",postsController.update);
router.delete("/:id",postsController.delete);
module.exports = router;