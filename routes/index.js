"use strict";

const express = require("express");
const router = express.Router();
const slugify = require("slugify");
const LocationsModel = require("../models/LocationsModel");

router.get("/", async (req, res) => {
  const locations = await LocationsModel.getAllLocations();
  res.json(locations).status(200);
});

module.exports = router;
