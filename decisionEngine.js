function normalize(value, min, max, type) {
  if (max === min) return 1;
  return type === "benefit"
    ? (value - min) / (max - min)
    : (max - value) / (max - min);
}

function getMinMax(options, field) {
  const values = options.map(o => o[field]);
  return { min: Math.min(...values), max: Math.max(...values) };
}

function passesHardConstraints(option, constraints) {
  for (let c of constraints) {
    if (c.operator === "<=" && option[c.field] > c.value) return false;
    if (c.operator === ">=" && option[c.field] < c.value) return false;
  }
  return true;
}

function runDecisionEngine(options, criteria, constraints) {
  const accepted = [];
  const rejected = [];

  options.forEach(o => {
    if (passesHardConstraints(o, constraints.hard)) {
      accepted.push(o);
    } else {
      rejected.push({ optionId: o.id, reason: "Hard constraint violation" });
    }
  });

  const stats = {};
  criteria.forEach(c => {
    stats[c.name] = getMinMax(accepted, c.name);
  });

  const results = accepted.map(o => {
    let rawScore = 0;
    let breakdown = {};

    criteria.forEach(c => {
      const norm = normalize(
        o[c.name],
        stats[c.name].min,
        stats[c.name].max,
        c.type
      );
      const weighted = norm * c.weight;
      rawScore += weighted;

      breakdown[c.name] = { normalized: norm, weighted };
    });

    let penalty = 0;
    constraints.soft.forEach(c => {
      if (o[c.field] > c.value) {
        penalty += (o[c.field] - c.value) * c.penaltyFactor;
      }
    });

    return {
      optionId: o.id,
      rawScore,
      penalty,
      finalScore: Math.max(0, rawScore - penalty),
      breakdown
    };
  });

  results.sort((a, b) => b.finalScore - a.finalScore);

  return { rankedResults: results, rejectedOptions: rejected };
}

module.exports = runDecisionEngine;