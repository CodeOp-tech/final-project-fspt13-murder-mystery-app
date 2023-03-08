var express = require("express");
var db = require("../model/helper");

var router = express.Router();

router.get("/", function (req, res, next) {
  res.send();
});

router.get("/questionsAnswers", async function (req, res, next) {
  try {
    const response = await db("SELECT * from questionsAnswers;");
    let entries = response.data;

    res.send(entries);
  } catch (error) {
    res.status(500).send();
  }
});

//GET one entry

router.get("/:id", async function (req, res, next) {
  const params = req.params;
  const id = params.id;

  try {
    const results = await db(`
  SELECT * FROM questionsAnswers WHERE id = ${id};
  `);
    let entries = results.data;
    const entry = entries[0];

    if (!entry) {
      res.status(404).send();
      return;
    }

    res.send({ entry });
  } catch (error) {
    res.status(500).send(error);
  }
});
