const express = require("express");
const cors = require("cors")
const dbconect = require("./config");
const app = express();



app.use(express.json());
app.use(cors({ origin: "*" }))

app.use("/api/clientes", require("./routes/Clientes-routes"))
app.use("/api/usuario", require("./routes/usuario-routes"))



app.listen(3005, () => {
    console.log("El servidor está conectado en el puerto 3005");
});
dbconect();

