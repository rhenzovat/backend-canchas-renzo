import express, { type Request, type Response } from 'express'//importacion de la libreria
import 'dotenv/config'

// const app = express() //Creacion de la aplicacion express
// const port = process.env.PORT||4000

// function miMiddleware(req, res, next){
// 	console.log('este es un middleware');
// 	console.log(`${req.method} ${req.url}`)
// 	next()
// }

// //creando un middleware
// app.use(miMiddleware);


// app.get('/usuario', (req, res) => { //definicion de un ruta y metodo HTTP
// 	console.log('este es mi servicio')
//   res.send('soy renzo PUERTO 3000') //Enviar la respuesta al cliente

// })

// app.listen(port, ()=>{
// 	console.log(`El servidor esta corriendo en el puerto ${port}`)
// })//poner el puerto en escucha


const app = express();//Creamos la aplicacion express
const port = process.env.PORT || 4000;

//midelword
app.use(express.json());

// (Medoto HTTP) + (base url+enpoit)
app.get('/canchas', (req: Request, resp:Response)=>{
// aca colocamos la logica
resp.json({message:"esta es la respuesta del Listado"})
})


app.post('/canchas', (req:Request, resp:Response)=>{
	// const valores = req.body;

	const{nombre, edad, direccion, isActive} = req.body; 
	const Persona = {
		nombre:"jose",
		edad:22
	}

	const{nombre:nombrecito,edad:edades}= Persona
	console.log(nombre, edad, direccion, isActive)
	console.log(nombrecito, edades)
	console.log(nombre)
	mostrarPersona(Persona)
	// const Persona={
	// 	name:"renzo",
	// 	apellido:"vargas",
	// 	edad: 25,
	// 	vive:"manchay"
	// }
	// const {edad, name, vive, apellido} = Persona;
	
	
	// console.log(vive, apellido,edad, name)


	// console.log("se recibio: ",valores);

resp.status(200).json({
	message: 'Creando una cancha',
})
})

app.get('/canchas/:id', (req: Request, resp:Response)=>{
// aca colocamos la logica

const valores = req.params.id;
console.log(`esto son los valores: ${valores}`)
interface Usuario{
	id:number;
	nombre:String;
	edad: number;
	pais:String;
	ciudad:String;
	activo:boolean
}
const usuario = {
	id:101,
	nombre:"Renzo",
	edad:32,
	pais:"peru",
	ciudad:"lima",
	activo:true
}

const {nombre, edad=1, activo:isActive} = usuario;
console.log(nombre, edad, isActive)

function mostrarResumen({nombre,edad,pais}:Usuario ){
 console.log(`mostrar: nombre ${nombre}, edad ${edad} y pais ${pais}`)
 
}
mostrarResumen(usuario)
resp.json({
	message:"esta es la respuesta del Listado"
	})
})





app.listen(port, () =>{
	console.log(`El servidor esta activo en el puerto ${port}`);
})

interface Persona{
	nombre:string;
	edad:number;

}
function mostrarPersona(persona:Persona){
	console.log(`Persona:${persona.nombre}, Edad: ${persona.edad}`)
}