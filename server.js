const express = require("express"); 
const app = express();

app.use(express.static("./public"));

app.get("/", function(req,res) {
    res.sendFile(__dirname + "/home.html");
});
app.post("/", function(req,res) {
     res.sendFile(__dirname + "/game.html");
});

app.listen(process.env.PORT || 3000, function() {
    console.log(`Server is running on port ${process.env.PORT}.`);
});
