const express = require("express");
const appRoute = require("./routes/Route");
const cors = require("cors");
const app = express();
const PORT = 8080;

app.use(cors());

app.use(express.json());

app.use("/api", appRoute);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
