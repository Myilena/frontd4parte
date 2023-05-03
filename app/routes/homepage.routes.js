import { Router } from "express";

const home = Router();

home.get("/", (req, res)=>{
    res.render("home",
    {
        "title":"Principal",
        "activo" : 1
    });
});
home.get("/servicio", (req, res)=>{
    res.render("servicio",
    {
        "title":"Servicio",
        "activo" : 2
    });
});
home.get("/contacto", (req, res)=>{
    res.render("contacto",
    {
        "title":"Contacto",
        "activo" : 5
    });
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

home.get("/producto", (req, res)=>{
    res.render("productos",
    {
        "title":"Productos",
        "activo": 3
    });
});

home.get("/acercade", (req, res)=>{
    res.render("acercade",
    {
        "title":"Acerca de ...",
        "activo" : 4
    });
});

export default home;