import { Router } from "express";
import cookieParser from "cookie-parser";

const dash = Router();

dash.get("/", (req, res)=>{
    if(res.cookie.eib_per){
        res.render("dashboard");
    }else{
        console.log("aqui");
        res.redirect("/login");
        //res.send(req.cookies);
    }
})

export default dash;