const express = require("express");
const app = express();
app.get("/home", (req, res) => {
  res.send("hello world");
});

app.get("/home/:courses", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("page not found");
  }
  res.send(course);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("listening on port 4000");
});
