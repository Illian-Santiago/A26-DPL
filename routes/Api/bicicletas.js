let express = require('express');
let router = express.Router();
let BicicletaControllerAPI = require("../../Controllers/Api/BicicletaControllerAPI");

router.get("/", BicicletaControllerAPI.bicicleta_list);
router.post("/create", BicicletaControllerAPI.bicicleta_create);
router.put("/update", BicicletaControllerAPI.bicicleta_update);
router.delete("/delete", BicicletaControllerAPI.bicicleta_delete);

module.exports = router;