import express from "express";
import dotenv from "dotenv";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from 'url';
dotenv.config();
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//Configuracion
app.set("port",process.env.PORT);
app.set("view engine", "ejs");
app.set("views",path.resolve(path.join(__dirname,"views")));

//middleware
app.use(express.static("./public"));

app.get("/", (req, res)=>{
    res.render("home");
})
app.listen(app.get("port"), ()=>{
    console.log(`estas en pueto: ${app.get("port")}`);
})