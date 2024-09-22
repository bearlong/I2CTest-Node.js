import express from "express";
import usersRouter from "./routes/users.mjs";

const app = express();
// API router
app.use("/api/users", usersRouter);

app.all("*", (req, res) => {
  res.send("<h1>404-找不到</h1>");
});

app.listen(3000, () => {
  console.log("服務以啟動於 http://localhost:3000");
});
