"use strict";

const express = require("express");
const router = express.Router();
const slugify = require("slugify");
const LocationsModel = require("../models/LocationsModel");

router.get("/:slug?", async (req, res) => {
  if (req.params.slug) {
    const { slug } = req.params;
    const locations = await LocationsModel.getBySlug(slug);
    res.json(locations).status(200);
  } else {
    const adventure = await LocationsModel.getAllLocations();
    res.json(adventure).status(200);
  }
});

module.exports = router;
