"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllerDebug = void 0;
const { request: Req } = require('express');
const { response: Res } = require('express');
const controllerDebug = (req, res) => {
    res.send("ok");
};
exports.controllerDebug = controllerDebug;
