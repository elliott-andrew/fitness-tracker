// Dependencies
const router = require("express").Router();
const Exercise = require("../models/fitness.js");

router.post("/api/workouts", ({body}, res) => {
    Exercise.create(body)
    .then(dbExercise => {
        res.json(dbExercise);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
    Exercise.find({})
      .sort({ date: -1 })
      .then(dbExercise => {
        res.json(dbExercise);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  module.exports = router;