const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const products = require("./data/products");

app.get("/api/products", (req, res) => {
  console.log("Request received at /api/products");
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
