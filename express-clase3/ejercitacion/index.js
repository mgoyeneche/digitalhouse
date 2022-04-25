
const express = require("express");
const {router} = require('./routes/products')


const PORT = 3000;

const app = express();


app.use(express.json());
app.use("/api", router);


let server = app.listen(PORT, console.log(`Listening on http://localhost:${PORT}`));

module.exports = { app,server };
