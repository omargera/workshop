var express = require("express"),
    app = express();
    port = 8088;

app.use(express.static(__dirname + '/public'));


app.get("*", function (req, res) {
  res.redirect("/index.html");
});

app.listen(port);
console.log("Simple static server listening at http://localhost:" + port);
