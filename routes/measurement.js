const Measurement = require("../models/measurement");
const express = require("express");
const measurementRouter = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../middlewares/auth");

 
measurementRouter.post("/api/save-measurement",auth, async (req, res) => {
    try {
      const { profileName, chestMeasurement, waistMeasurement, hipsMeasurement, inseamMeasurement, sleeveMeasurement,  shoulderMeasurement } = req.body;

      let measurement = new Measurement({
        profileName, 
        chestMeasurement, 
        waistMeasurement, 
        hipsMeasurement, 
        inseamMeasurement, 
        sleeveMeasurement,  
        shoulderMeasurement,
        userId: req.user
      });
      measurement = await measurement.save();
      res.json(measurement);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });

module.exports = measurementRouter;