import express from "express";
import dotenv from "dotenv";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from 'url';
import home from "./routes/homepage.routes.js";
import loginRouter from "./routes/login.routes.js";
import passport from "passport";
import "./middlewares/google.js";

// Inicializacion
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
app.use(passport.initialize());

// rutas
app.use("/", home);
app.use("/auth", passport.authenticate("auth-google", {
    scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
    ],
    session: false
}), loginRouter);



export default app;