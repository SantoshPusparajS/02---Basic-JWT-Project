import express from "express";
import dashboardHandler from "../controllers/dashboardController.js";

const router = express.Router();

router.route("/").get(dashboardHandler);

export default router;
