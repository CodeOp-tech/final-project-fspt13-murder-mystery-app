var express = require("express");
var db = require("../model/helper");

var router = express.Router();

router.get("/", function (req, res, next) {
  res.send();
});

router.get("/characters", async function (req, res, next) {
  try {
    const response = await db("SELECT * from characters;");
    let characters = response.data;

    res.send(characters);
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
  SELECT * FROM characters WHERE id = ${id};
  `);
    let characters = results.data;
    const character = characters[0];

    if (!character) {
      res.status(404).send();
      return;
    }

    res.send({ character });
  } catch (error) {
    res.status(500).send(error);
  }
});
