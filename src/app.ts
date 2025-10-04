import express from 'express'//importacion de la libreria
import 'dotenv/config'
const app = express() //Creacion de la aplicacion express
const port = process.env.PORT

function miMiddleware(req, res, next){
	console.log('este es un middleware');
	console.log(`${req.method} ${req.url}`)
	next()
}

//creando un middleware
app.use(miMiddleware);


app.get('/usuario', (req, res) => { //definicion de un ruta y metodo HTTP
	console.log('este es mi servicio')
  res.send('soy renzo PUERTO 3000') //Enviar la respuesta al cliente

})

app.listen(port, ()=>{
	console.log(`El servidor esta corriendo en el puerto ${port}`)
})//poner el puerto en escucha


