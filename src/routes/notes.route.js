import express from "express";

import { createNote, viewNote } from "../controller/notes.controller.js";

const router = express.Router();

router.post("/create", createNote);
router.get("/view/:id", createNote);
router.put('/notes/:id', updateNote);

export default router;
