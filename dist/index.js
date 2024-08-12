"use strict";
const { app } = require("./router/app");
const path = require("path");
require('dotenv').config({ path: path.resolve(__dirname, "../.env") });
const PORT = process.env.PORT || 7073;
app.listen(PORT, () => {
    console.log(`service haddle backend listen to port: ${PORT}, http://localhost:${PORT}/api/debug`);
});
