const express = require("express");
const path = require("path");

const app = express();
app.set("port", process.env.PORT || 3000);

app.use("/static", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/pages/index.html"));
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "is ready!");
});
