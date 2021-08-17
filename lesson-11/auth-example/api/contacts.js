const express = require("express");

const {authenticate} = require("../middlewares");
const {contacts: ctrl} = require("../controllers");

const router = express.Router();

router.get("/", authenticate, ctrl.getContacts);
