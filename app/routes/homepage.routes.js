import { Router } from "express";

const home = Router();

home.get("/", (req, res)=>{
    res.render("home",{"title":"Principal"});
});
home.get("/servicio", (req, res)=>{
    res.render("servicio",{"title":"Servicio"});
});
home.get("/contacto", (req, res)=>{
    res.render("contacto",{"title":"Contacto"});
});
home.get("/blog", (req, res)=>{
    res.render("blog",{"title":"blog"});
});
home.get("/galeria", (req, res)=>{
    res.render("galeria",{"title":"Galeria"});
});
home.get("/login", (req, res)=>{
    res.render("login",{"title":"Login"});
});

export default home;