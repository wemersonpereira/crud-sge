const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const mysql = require("mysql")
const bodyParser = require('body-parser')
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "098816",
  database: "sge"
})

const dependencies = {
  connection
}

const funcionarios = require('./routes/funcionarios')
const linhas = require('./routes/linhas')
const smartphones = require('./routes/smartphones')

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static("public"));



app.get("/", (req, res) => res.render("home"));
app.use('/funcionarios',funcionarios(dependencies))
app.use('/linhas',linhas(dependencies))
app.use('/smartphones',smartphones(dependencies))

//view engine
app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");

connection.connect(() => {
  app.listen(port, () => console.log("CRUD listening on port", +port));
})

