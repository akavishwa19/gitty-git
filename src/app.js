const express = require("express");
const cors=require("cors");
require("dotenv").config({quiet:true});

const app = express();

app.use(express.json());
app.use(cors());

app.get("/health", async (req, res) => {
  try {
    const messsage = "server running fine";
    return res.status(200).json({
      messsage,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const PORT = parseInt(process.env.PORT) || 3001;

app.listen(PORT, () => {
  console.log("server listens on http://localhost:" + PORT);
});
