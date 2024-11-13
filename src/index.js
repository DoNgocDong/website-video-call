const express =  require("express");
const http = require("http");
const config = require("./config/env.config");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const httpServer = http.createServer(app);
const port = config.app.port;

httpServer.listen(port, () => {
  console.log(`Application running on port ${port}`)
})