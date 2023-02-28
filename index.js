const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/connectDB");
const newcontact = require("./routes/newcontact");
const contacts = require("./routes/newcontact");
const search = require("./routes/searchcontact");
const deletecontact = require("./routes/delete");
const updatecontact = require("./routes/update");
const patchupdate = require("./routes/update");

const app = express();
dotenv.config()
const cors = require("cors");





app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));




app.use("/api", newcontact);
app.use("/api", contacts);
app.use("/", search);
app.use("/", deletecontact);
app.use("/", updatecontact);
app.use("/", patchupdate);

app.listen(process.env.PORT, async () => {
    await connectDB()
    console.log(`App is connected at ${process.env.PORT} port`);
})