import app from "./app.js";
import mongoose from "mongoose";

const PORT = process.env.PORT || 3000;
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log("DB connection is successful!");
});

app.listen(PORT, () => {
  console.log(`Server is connected at the port ${PORT}`);
});
