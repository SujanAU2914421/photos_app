const express = require(express);

const app = express();

app.get("/", (req, res) => {
  console.log("hello world");
});

app.listen(3000, () => console.log("listening to the 3000 port"));
