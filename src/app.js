//import packages
import express from "express";
import cors from "cors"
import chalk from "chalk";
import axios from "axios";
import 'dotenv/config'

//init app
const app = express();

//attach middlewares
app.use(express.json());
app.use(cors());

//health check api
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

//dummy function to test health api via axios
async function fetchVIaAxios(){
  try {
    const data =await axios.get('http://localhost:'+PORT+'/health');
    console.log(data?.data);
  } catch (error) {
    console.log(error);
    throw new Error(error)
  }
}

//inject port from env
const PORT = Number(process.env.PORT) || 3001;

//listen on the port
app.listen(PORT, async () => {
 console.log( "app is running on " + chalk.blue.underline.bold("http://localhost:" + PORT));
 await fetchVIaAxios()
});
