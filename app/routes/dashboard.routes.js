import { Router } from "express";

const dash = Router();

dash.get("/dash", (req, res)=>{
    res.render("dashboard")
})

export default dash;