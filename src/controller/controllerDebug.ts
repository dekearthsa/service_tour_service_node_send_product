const { request: Req } = require('express')
const { response: Res } = require('express')

const controllerDebug = (req: typeof Req, res: typeof Res) => {
    res.send("ok");
}

export {controllerDebug}
