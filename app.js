import express from "express";
import "express-async-errors";
import "dotenv/config";
import morgan from "morgan";

import loginRouter from "./routes/loginRoute.js";
import dashboardRoute from "./routes/dashboardRoute.js";

const app = express();

app.use(express.json());
app.use(express.static("./public"));
app.use(morgan("dev"));

app.use("/api/v1/login", loginRouter);
app.use("/api/v1/dashboard", dashboardRoute);

export default app;
