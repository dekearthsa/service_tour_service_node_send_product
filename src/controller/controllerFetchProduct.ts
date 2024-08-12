const { request: Req } = require('express')
const { response: Res } = require('express')
import {Datastore} from "@google-cloud/datastore"

const datastore = new Datastore();
const KIND = "productdetail";

const controllerFetchProduct = async (req: typeof Req, res: typeof Res) => {
    const {region} = req.body; 

    try{
        const query = datastore.createQuery(KIND).filter("region", "=", region);
        const [isProduct]:any = await datastore.runQuery(query);
        res.status(200).send(isProduct);
    }catch(err){
        res.status(500).send(err);
    }   
}

export {controllerFetchProduct}