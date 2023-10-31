const mongoose = require("mongoose");
const app = require("./app")
const {DB_HOST,DB_PASSWORD,DB_USER} = require('./config')
//acceder a la configuracion del archivo env.
require("dotenv").config()
/* acceder a variables del .env se usa process.env y el nombre de esa variable */
const port = process.env.PORT||3000;
app.listen(port, ()=>console.log(`conectados por el puerto ${port}`))

//crear conexion a bd mong
//mongodb+srv://admin_user:Soyfeliz13@cluster0.pepu0zt.mongodb.net/
//mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}`)
.then(()=>console.log('Conectando a among us'))
.catch((err)=>console.log("error en among us"))