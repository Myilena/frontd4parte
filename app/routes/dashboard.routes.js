import { Router } from "express";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import fetch from "node-fetch";

const dash = Router();

dash.get("/", (req, res)=>{
    if(req.cookies.eib_per){
        try {
            const token = jwt.verify(
                req.cookies.eib_per, 
                process.env.SECRET_KEY
                )
            let nombre = token.nombre;
            let foto = token.foto;

            res.render("dashboard",{
                "nombre": nombre,
                "foto": foto,
                "mnu" : 0
            });
        } catch (error) {
            res.redirect("/login");
        }
    }else{
        res.redirect("/login");
    }
})
dash.get("/salir", (req , res)=>{
    res.clearCookie("eib_per");
    res.redirect("/v1");
})
dash.get("/usuario", async (req, res)=>{
    if(req.cookies.eib_per){
        try {
            const token = jwt.verify(
                req.cookies.eib_per, 
                process.env.SECRET_KEY
                )
            let nombre = token.nombre;
            let foto = token.foto;

            let ruta = "http://localhost:5000/api/users";
            let info;
            const result = await fetch(ruta)
            const data = await result.json();
            console.log(data);
            // .catch(err =>{console.log(err);})
            res.render("dashboard",{
                "nombre": nombre,
                "foto": foto,
                "mnu" : 2
            });
        } catch (error) {
            res.redirect("/login");
        }
    }else{
        res.redirect("/login");
    }
})

export default dash;