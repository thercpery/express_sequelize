const express = require("express");
const tutorialController = require("../controllers/tutorials");
const router = express.Router();

// Create a new tutorial
router.post("/", tutorialController.create);

// Retrieve all tutorials
router.get("/", tutorialController.findAll);

// Retrieve all published tutorials
router.get("/published", tutorialController.findAllPublished);

// Retrieve one tutorial by ID
router.get("/:id", tutorialController.findOne);

// Update a single tutorial with id
router.put("/:id", tutorialController.update);

// Delete a tutorial with Id
router.delete("/:id", tutorialController.delete);

// Delete all tutorial
router.delete("/", tutorialController.deleteAll);

module.exports = router;