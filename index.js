const express = require("express");
const useRouter = require("./routes/users.route");

const app = express();

app.get("/", (req, res) => {
  res
  .status(200)
  .send("Welcome to my Server. Please use /users to get all users");
});
app.use("/users", useRouter)

app.listen(4004, (err) => {
  console.log("🌍 Server listening on http://localhost 4004");
});