const express = require("express");
const cors=require("cors");
const chalk = require("chalk");
const axios = require("axios");
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

async function fetchVIaAxios(){
  try {
    const data =await axios.get('http://localhost:'+PORT+'/health');
    console.log(data?.data);
  } catch (error) {
    console.log(error);
    throw new Error(error)
  }
}

const PORT = parseInt(process.env.PORT) || 3001;

app.listen(PORT, async () => {
 console.log( "app is running on " + chalk.blue.bold("http://localhost:" + PORT));
 await fetchVIaAxios()
});
