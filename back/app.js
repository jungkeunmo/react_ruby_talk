const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const PORT = 4000;
const app = express();

app.use(morgan("dev"));
app.use(cors());

app.get("/api", (req, res) => {
    return res.status(200).send("Hello word");
});

app.listen(PORT, () => {
    console.log(`${PORT} SERVER START`);
});