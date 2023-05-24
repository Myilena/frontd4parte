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
            console.log(data[0][0]);
            // .catch(err =>{console.log(err);})
            res.render("dashboard",{
                "nombre": nombre,
                "foto": foto,
                "mnu" : 2,
                "data":data[0][0]
            });
        } catch (error) {
            res.redirect("/login");
        }
    }else{
        res.redirect("/login");
    }
})
dash.post("/save",async (req, res)=>{
    const name = req.body.name;
    
    try {
        
        const datos = {
            name : name 
        };
        const url = "http://localhost:5000/api/users";
        const option = {
            method : "POST",
            body : JSON.stringify(datos),
            headers : {
                'Content-Type':'application/json'
            }
        }
        const result = await fetch(url, option)
        .then(response=>response.json())
        .then(data=>{
            if (data[0].affectedRows>0){
                console.log("Los datos fueron insertados");
            }else{
                console.log("Labase datos no inserto");
            }
        })
        .then(error=>{console.log("Ha habido un error: "+ error);})
    } catch (error) {
        console.log("Informacion no insertada: "+error);
    }
    
    res.redirect("/v1/usuario")
})
dash.get("/usuario-edit", (req, res)=>{
    if(req.cookies.eib_per){
        try {
            const data = {
                id : req.query.id,
                name : req.query.name
            }
            
            const token = jwt.verify(
                req.cookies.eib_per, 
                process.env.SECRET_KEY
                )
            let nombre = token.nombre;
            let foto = token.foto;
            res.render("dashboard",{
                "nombre": nombre,
                "foto": foto,
                "mnu" : 3,
                "data" : data
            });
        }catch(error){
            console.log("Token no valido");
        }

    }else{
        res.redirect("/login")
    }
})

export default dash;