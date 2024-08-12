"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express = require("express");
const cors = require("cors");
const { controllerDebug } = require("../controller/controllerDebug");
const { controllerFetchProduct } = require("../controller/controllerFetchProduct");
// const multer = require('multer');
// const storage = multer.memoryStorage()
// const upload = multer({ storage: storage })
const app = express();
exports.app = app;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: '*' }));
app.get("/api/debug", controllerDebug);
app.post("/api/fetch/product", controllerFetchProduct);
