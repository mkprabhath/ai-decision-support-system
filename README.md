# AI Decision Support System

A simple full-stack AI-style Decision Support System that evaluates input parameters and provides a clear decision along with an explanation and visual feedback.

This project demonstrates frontend–backend integration, rule-based decision logic, and a clean user interface with color-coded outputs.

---

## Features

- Accepts three inputs:
  - Demand
  - Cost
  - Risk
- Produces one of three decisions:
  - Avoid
  - Review
  - Proceed
- Displays a clear reason for every decision
- Uses color-coded UI for better clarity and user experience
- Simple and explainable decision logic
- Lightweight and beginner-friendly full-stack project

---

## Tech Stack

Frontend:
- HTML
- CSS
- JavaScript (Fetch API)

Backend:
- Node.js
- Express.js

---

## Decision Logic Overview

- Proceed: High demand, low cost, and low risk
- Review: Moderate or mixed input values
- Avoid: High risk or unfavorable cost–demand balance

The logic imitates how a basic AI decision engine evaluates multiple factors before making a decision.

---

## Project Structure

ai-decision-support-system/
├── backend/
│   ├── index.js
│   ├── package.json
│   └── node_modules/
├── test.html
└── README.md

---

## Learning Outcomes

- Understanding frontend to backend communication using REST APIs
- Designing explainable decision systems
- Improving UI clarity using colors and feedback
- Structuring a clean full-stack project
- Debugging real-world integration issues

---

## Future Improvements

- Replace rule-based logic with a machine learning model
- Deploy the application online
- Add input validation and better error handling
- Store past decisions
- Convert frontend into a React application

---

## Author

Malladi Kameshwar Prabhath

---

If you find this project useful, feel free to star the repository.