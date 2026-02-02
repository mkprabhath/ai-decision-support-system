const express = require("express");
const runDecisionEngine = require("./decisionEngine");

const router = express.Router();

router.post("/", (req, res) => {
  const { options, criteria, constraints } = req.body;

  const result = runDecisionEngine(options, criteria, constraints);
  res.json(result);
});

module.exports = router;