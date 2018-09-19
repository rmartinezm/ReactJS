let express = require('express');
let router = express.Router();

const ParseServer = require('../env/ParseEnviroment');


router.post('/new_user', (req, res, next) => {
    let Parse = new ParseServer().getParse();
    console.log(Parse);
    res.status(200).send({ response: "newUserRoute" })
});
  
module.exports = router;