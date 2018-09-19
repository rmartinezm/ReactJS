let express = require('express');
let router = express.Router();

router.post('/new_user', (req, res, next) => {
    res.status(200).send({ response: "newUserRoute" })
});
  
module.exports = router;