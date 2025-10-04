"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //importacion de la libreria
require("dotenv/config");
const app = (0, express_1.default)(); //Creacion de la aplicacion express
const port = process.env.PORT;
function miMiddleware(req, res, next) {
    console.log('este es un middleware');
    console.log(`${req.method} ${req.url}`);
    next();
}
//creando un middleware
app.use(miMiddleware);
app.get('/usuario', (req, res) => {
    console.log('este es mi servicio');
    res.send('soy renzo PUERTO 3000'); //Enviar la respuesta al cliente
});
app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`);
}); //poner el puerto en escucha
//# sourceMappingURL=app.js.map