"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllerFetchProduct = void 0;
const { request: Req } = require('express');
const { response: Res } = require('express');
const datastore_1 = require("@google-cloud/datastore");
const datastore = new datastore_1.Datastore();
const KIND = "productdetail";
const controllerFetchProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { region } = req.body;
    try {
        const query = datastore.createQuery(KIND).filter("region", "=", region);
        const [isProduct] = yield datastore.runQuery(query);
        res.status(200).send(isProduct);
    }
    catch (err) {
        res.status(500).send(err);
    }
});
exports.controllerFetchProduct = controllerFetchProduct;
