const express = require("express");
const cors = require("cors");
const db = require("./models");
const tutorialRoutes = require("./routes/tutorials");
const app = express();
const corsOptions = {
    origin: "http://localhost:5000"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

db.sequelize.sync().then(() => {
    console.log("DB connected");
});

// Dev mode
// db.sequelize.sync({force: true}).then(() => {
//     console.log("Drop and re-sync db.");
// });

// Test route
app.get("/", (req, res) => res.send("Mic check"));

app.use("/api/tutorials", tutorialRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));