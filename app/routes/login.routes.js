import { Router } from "express";
import  jwt  from "jsonwebtoken";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();

const loginRouter = Router();

loginRouter.get("/google", (req, res)=>{
    var data = {
        "nombre" : req.user.displayName,
        "id" : req.user.id,
        "email": req.user.emails[0].value
    };
    let token = jwt.sign(data, process.env.SECRET_KEY, { "expiresIn" : process.env.EXPIRE_TOKEN });

    // let timeExpireCookie = 1000 * 60 * process.env.EXPIRE_COOKIE;

    res.cookie("eib_per", token);

    res.redirect("/v1/");
});

export default loginRouter;