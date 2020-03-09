const express = require("express");
const bodyParser = require("body-parser");
const { config } = require("dotenv");

const { initDBConnection } = require("./db/db");
const { API_V } = require("./constants/apiVersions.constants");

const { materialRouter } = require("./routes/material.routes");
const { specialtyRouter } = require("./routes/specialty.routes");
const { staffRouter } = require("./routes/staff.routes");
const { equipmentRouter } = require("./routes/equipment.routes");
const { departmentRouter } = require("./routes/department.routes");
const { productRouter } = require("./routes/product.routes");
const { ageRangeRouter } = require("./routes/ageRange.routes");

config();
initDBConnection();

const PORT = +process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(`${API_V.V1}material`, materialRouter.getRoutes());
app.use(`${API_V.V1}specialty`, specialtyRouter.getRoutes());
app.use(`${API_V.V1}staff`, staffRouter.getRoutes());
app.use(`${API_V.V1}equipment`, equipmentRouter.getRoutes());
app.use(`${API_V.V1}department`, departmentRouter.getRoutes());
app.use(`${API_V.V1}product`, productRouter.getRoutes());
app.use(`${API_V.V1}age_range`, ageRangeRouter.getRoutes());

app.listen(PORT, port => console.log(`Server is running on port ${PORT}`));
