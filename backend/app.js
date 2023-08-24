const express = require("express");
var cors = require("cors");
const app = express();
const port = 3000;
const students = require("./studentList.json");

app.use(cors());

app.get("/students", (req, res) => {
  res.send(students);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
