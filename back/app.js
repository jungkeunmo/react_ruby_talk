const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const userRouter = require("./routers/userRouter");
const messageRouter = require("./routers/messageRouter");

const PORT = 4000;
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use("/api/user" , userRouter);
app.use("/api/message", messageRouter);

app.listen(PORT, () => {
    console.log(`${PORT} SERVER START`);
});