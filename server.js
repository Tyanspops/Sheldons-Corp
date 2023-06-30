const express = require("express"); 
const app = express();


app.use(express.static("./public"));


app.get("/", function(req,res) {
    res.sendFile(__dirname + "/home.html");
});
app.post("/", function(req,res) {
     res.sendFile(__dirname + "/game.html");
});


app.post("/gameaboutus", function(req,res) {
     res.sendFile(__dirname + "/aboutus.html");
});
app.post("/gameterms", function(req,res) {
     res.sendFile(__dirname + "/terms.html");
});
app.post("/gamefaq", function(req,res) {
     res.sendFile(__dirname + "/faq.html");
});
app.post("/gameblog", function(req,res) {
     res.sendFile(__dirname + "/blog.html");
});


app.post("/homehome", function(req,res) {
     res.sendFile(__dirname + "/home.html");
});
app.post("/homeaboutus", function(req,res) {
     res.sendFile(__dirname + "/aboutus.html");
});
app.post("/hometerms", function(req,res) {
     res.sendFile(__dirname + "/terms.html");
});
app.post("/homefaq", function(req,res) {
     res.sendFile(__dirname + "/faq.html");
});
app.post("/homeblog", function(req,res) {
     res.sendFile(__dirname + "/blog.html");
});

app.post("/aboutushome", function(req,res) {
     res.sendFile(__dirname + "/home.html");
});
app.post("/aboutusaboutus", function(req,res) {
     res.sendFile(__dirname + "/aboutus.html");
});
app.post("/aboutusterms", function(req,res) {
     res.sendFile(__dirname + "/terms.html");
});
app.post("/aboutusfaq", function(req,res) {
     res.sendFile(__dirname + "/faq.html");
});
app.post("/aboutusblog", function(req,res) {
     res.sendFile(__dirname + "/blog.html");
});

app.post("/termshome", function(req,res) {
     res.sendFile(__dirname + "/home.html");
});
app.post("/termsaboutus", function(req,res) {
     res.sendFile(__dirname + "/aboutus.html");
});
app.post("/termsterms", function(req,res) {
     res.sendFile(__dirname + "/terms.html");
});
app.post("/termsfaq", function(req,res) {
     res.sendFile(__dirname + "/faq.html");
});
app.post("/termsblog", function(req,res) {
     res.sendFile(__dirname + "/blog.html");
});

app.post("/faqhome", function(req,res) {
     res.sendFile(__dirname + "/home.html");
});
app.post("/faqaboutus", function(req,res) {
     res.sendFile(__dirname + "/aboutus.html");
});
app.post("/faqterms", function(req,res) {
     res.sendFile(__dirname + "/terms.html");
});
app.post("/faqfaq", function(req,res) {
     res.sendFile(__dirname + "/faq.html");
});
app.post("/faqblog", function(req,res) {
     res.sendFile(__dirname + "/blog.html");
});

app.post("/bloghome", function(req,res) {
     res.sendFile(__dirname + "/home.html");
});
app.post("/blogaboutus", function(req,res) {
     res.sendFile(__dirname + "/aboutus.html");
});
app.post("/blogterms", function(req,res) {
     res.sendFile(__dirname + "/terms.html");
});
app.post("/blogfaq", function(req,res) {
     res.sendFile(__dirname + "/faq.html");
});
app.post("/blogblog", function(req,res) {
     res.sendFile(__dirname + "/blog.html");
});

app.listen(process.env.PORT || 3000, function() {
    console.log(`Server is running on port ${process.env.PORT}.`);
});
