import app from "./app/app.js";


app.listen(app.get("port"), ()=>{
    console.log(`estas en pueto: http://localhost:${app.get("port")}`);
})