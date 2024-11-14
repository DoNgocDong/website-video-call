const express =  require("express");
const http = require("http");
const config = require("./config/env.config");

const app = express();
const port = config.app.port;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  res.render('index');
})

const httpServer = http.createServer(app);

httpServer.listen(port, () => {
  console.log(`Application running on port ${port}`)
});