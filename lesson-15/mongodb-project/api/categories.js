const express = require("express");

const {validateMiddleware, controllerWrapper} = require("../middleware");
const {category: {validateCategory}} = require("../models/schemas");

const {categories: ctrl} = require("../controllers");

const router = express.Router();

router.get("/", controllerWrapper(ctrl.getAll));
// router.get("/", resultController);
/*
const controllerWrapper = ctrl.getAll => {
    const resultController = async (req, res, next) => {
        try {
            await ctrl.getAll(req, res, next);
        }
        catch(error){
            next(error);
        }
    }
    return resultController;
};
*/


router.get("/:id", controllerWrapper(ctrl.getById));

// router.post("/", express.json(), categoryValidateMiddleware, ctrl.add);
router.post("/", express.json(), validateMiddleware(validateCategory), controllerWrapper(ctrl.add));
router.put("/:id", express.json(), controllerWrapper(ctrl.update));

router.delete("/:id", controllerWrapper(ctrl.del));

module.exports = router;



