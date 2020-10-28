const express = require("express");
const apiRouter = require("./routes");
const morgan = require("morgan");
const logger = require("./middleware/requestLogger");
const path = require("path");
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

// Define Routes
app.use("/api/v1/", apiRouter);

app.use("/static", express.static(path.join(`${__dirname}/public`)));

app.get("/", (req, res) => {
  res.sendFile(path.join(`${__dirname}/public/index.html`));
});

// Ports
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
