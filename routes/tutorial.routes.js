module.exports = app => {

    const tutorials = require("../controller/tutorial.controller");

    var router = require("express").Router();

    router.get("", tutorials.findAll);

    router.post("/", tutorials.create);
    
    app.use('/api/tutorial', router);

}