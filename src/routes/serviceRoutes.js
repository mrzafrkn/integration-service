import express from "express";
import { fetchData, insertData } from "../controllers/serviceControllers.js";

const router = express.Router();

router.get("/get-data", (req, res) => {
  res.sendStatus(200);
  fetchData();
});

router.post("/create", insertData);

export default router;
