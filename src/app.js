import express from "express";
import cors from "cors"
import chalk from "chalk";
import axios from "axios";
import 'dotenv/config'

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

const PORT = Number(process.env.PORT) || 3001;

app.listen(PORT, async () => {
 console.log( "app is running on " + chalk.blue.bold("http://localhost:" + PORT));
 await fetchVIaAxios()
});
