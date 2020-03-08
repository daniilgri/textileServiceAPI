const express = require("express");
const bodyParser = require("body-parser");
const { config } = require("dotenv");

const { initDBConnection } = require("./db/db");
const { API_V } = require("./constants/apiVersions.constants");

const { materialRouter } = require("./routes/material.routes");

config();
initDBConnection();

const PORT = +process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(`${API_V.V1}material`, materialRouter.getRoutes());

app.listen(PORT, port => console.log(`Server is running on port ${PORT}`));
