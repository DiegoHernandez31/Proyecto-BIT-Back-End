import "dotenv/config";
import express from "express";
import rollController from "../controllers/rollController.js";
const router = express.Router();

router.get("/", rollController.list);
router.post("/", rollController.createNewRoll);
router.get("/:id", rollController.findRollById);
router.patch("/:id", rollController.updateRoll);
router.delete("/:id", rollController.deleteRoll);

export default router;