const express = require("express");
const cors = require('cors');
/* app conectar con el puerto local el express */
/* especificar los middleware a utilizar */
const app = express();

app.use(cors())
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const API_VERSION = 'api/v1'
/* acceder a la configuracion del archivo */
//pruebas con extension rest client
app.use(express.json());
// pruebas desde postman
app.use(express.urlencoded({ extended:true}));
// http://localhost:3100/api/v1/user/new-user
app.use(`/${API_VERSION}/users`, userRoutes)
app.use(`/${API_VERSION}/auth`, authRoutes)

module.exports = app;
