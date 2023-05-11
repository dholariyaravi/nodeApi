const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};





const db = require("./model");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });



  app.use(cors(corsOptions));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

require("./routes/tutorial.routes")(app);


app.get("/", (req, res) => {
    res.json({ message: "Welcome to ravi application." });
  });

  app.get('/dec/:number1/:number2', function (req, res) {
    var num1 = parseInt(req.params.number1)
    var num2 = parseInt(req.params.number2)
    res.json({ message : num1 + num2});
  })

  app.get('/pls/:number1/:number2', function (req, res) {
    var num1 = parseInt(req.params.number1)
    var num2 = parseInt(req.params.number2)
    res.json({ message : num1 - num2});
  })

  app.get('/mod/:number1/:number2', function (req, res) {
    var num1 = parseInt(req.params.number1)
    var num2 = parseInt(req.params.number2)
    res.json({ message : num1 * num2});
  })

  app.get('/sub/:number1/:number2', function (req, res) {
    var num1 = parseInt(req.params.number1)
    var num2 = parseInt(req.params.number2)
    res.json({ message : num1 / num2});
  })
  



  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });

// ========================================================================= 



