// importar mongoose
import mongoose from 'mongoose'

// permitir que solo los campos definidos en el Schema sean almacenados en la BDD
mongoose.set('strictQuery', true)


// crear una funcion llamada connection()
const connection = async()=>{
    try {
        // Establecer la conexion con la BDD
        const {connection} = await mongoose.connect(process.env.MONGODB_URI)
        // Presentar la conexion enla consola
        console.log(`Database is connected on ${connection.host} - ${connection.port}`)
    } catch (error) {
        // Capturar Error en la conexion
        console.log(error);
    }
}

//Exportar la funcion
export default  connection