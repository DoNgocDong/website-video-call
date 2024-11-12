import express from "express";
import http from 'http';
import config from "./config/env.config.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const httpServer = http.createServer(app);
const port = config.app.port;

httpServer.listen(port, () => {
  console.log(`Application running on port ${port}`)
})