const express = require("express");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const { adminRouter } = require("./routes/adminRoutes");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);

app.use("/api/admin", adminRouter);

app.listen(process.env.port, async () => {
  console.log(`server is running at ${process.env.port}`);
});
