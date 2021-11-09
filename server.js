const connectDB = require("./config/db");
const express = require("express");

const app = express();

// Connect Database
connectDB();

// Initialize Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Api Running"));

//Define routes
app.use("/api/users", require("./src/backend/routes/api/users"));
app.use("/api/auth", require("./src/backend/routes/api/auth"));
app.use("/api/profile", require("./src/backend/routes/api/profile"));
app.use("/api/courses", require("./src/backend/routes/api/coures"));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
