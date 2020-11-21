// Dependencies
const router = require("express").Router();
const Exercise = require("../models/fitness.js");

router.post("/api/workouts", (req, res) => {
    Exercise.create({})
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

  router.delete("/api/workouts/:id", (req, res) =>{
    Exercise.remove(
      {
        _id: mongojs.ObjectID(req.params.id)
      },
      (error, data) => {
        if (error) {
          res.send(error);
        } else {
          res.send(data);
        }
      }
    );
  })
  
  router.put("/api/workouts/:id", (req, res) => {
    Exercise.findByIdAndUpdate(
      req.params._id,
      { $push: { exercises: req.body } },
    )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  });
  module.exports = router;