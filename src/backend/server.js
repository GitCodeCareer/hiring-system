const express = require("express");
const apiRouter = require("./routes");
const { Router } = require('express');
const morgan = require("morgan");
const logger = require("./middleware/requestLogger");

// Init Express
const app = express();
app.use(express.json({ extended: false }));

// Middleware
// Logger
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  app.use(logger);
}

// Static Routes
app.use(express.static('public'));

// Define API Routes
app.use("/api/v1/", apiRouter);

// Ports
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
