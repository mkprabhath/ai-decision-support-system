const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route (VERY IMPORTANT)
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Decision API
app.post("/api/decision", (req, res) => {
  const { demand, cost, risk } = req.body;

  let decision = "DO NOT PROCEED";
  let confidence = "LOW";
  let reason = "Low demand or high cost/risk";

  if (demand >= 7 && cost <= 4 && risk <= 4) {
    decision = "PROCEED";
    confidence = "HIGH";
    reason = "High demand with manageable cost and risk";
  } else if (demand >= 5 && cost <= 6 && risk <= 6) {
    decision = "PROCEED WITH CAUTION";
    confidence = "MEDIUM";
    reason = "Moderate conditions, monitor closely";
  }

  res.json({ decision, confidence, reason });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});