const express = require("express");
const { config } = require("dotenv");
const { initDBConnection } = require("./db/db");

config();
initDBConnection();

const PORT = +process.env.PORT;
const app = express();

app.listen(PORT, port => console.log(`Server is running on port ${PORT}`));
