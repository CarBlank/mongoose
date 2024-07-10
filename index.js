const express = require("express");
const app = express();

const { dbConnection } = require("./config/config");
const PORT = 3000;

dbConnection();

app.use(express.json());

app.use("/products", require("./routes/products"));

app.listen(PORT, () => console.log(`server started ok at port ${PORT}`));
