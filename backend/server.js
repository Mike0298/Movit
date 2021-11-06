const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json({ extended: false }));

connectDB();

app.get("/", (req, res) => res.send("Hello"));

app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/movies", require("./routes/api/movies"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
