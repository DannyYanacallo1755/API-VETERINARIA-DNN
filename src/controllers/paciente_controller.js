import { sendMailToPaciente } from "../config/nodemailer.js"
import Paciente from "../models/Paciente.js"


const loginPaciente = (req,res)=>{
    res.send("Login del paciente")
}


const perfilPaciente = (req,res)=>{
    res.send("Perfil del paciente")
}


const listarPacientes = async (req,res)=>{
    // Obtener todos los pacientes que se encuentren activos
    // Que son solo los del paciente que inicie sesion
    // Mostrar campos de documentos relacionados
    const pacientes = await Paciente.find({estado:true}).where('veterinario').equals(req.veterinarioBDD).select("-salida -createdAt -updatedAt -__v").populate('veterinario','_id nombre apellido')
    res.status(200).json(pacientes)
}


const detallePaciente = (req,res)=>{
    res.send("Detalle del paciente")
}


const registrarPaciente = async(req,res)=>{
    // Desestructurar el email
    const {email} = req.body
    //vvalidar todos los vcaompos
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    const verificarEmailBDD = await Paciente.findOne({email})
    // Verificamos si el paciente ya se encuentra registrado
    if(verificarEmailBDD) return res.status(400).json({msg:"Lo sentimos, el email ya se encuentra registrado"})
    const nuevoPaciente = new Paciente(req.body)
    // encriptar el passsword
    const password = Math.random().toString(36).slice(2)
    nuevoPaciente.password = await nuevoPaciente.encrypPassword("vet"+password)
    // enviar correo electronico
    await sendMailToPaciente(email,"vet"+password)
    // Asociar el paciente con el veterinario
    nuevoPaciente.veterinario=req.veterinarioBDD._id
    //Guardar en la base de datos
    await nuevoPaciente.save()
    res.status(200).json({msg:"Registro exitoso del paciente y correo enviado"})
}


const actualizarPaciente = (req,res)=>{
    res.send("Actualizar paciente")
}


const eliminarPaciente = (req,res)=>{
    res.send("Eliminar paciente")
}



export {
	loginPaciente,
	perfilPaciente, 
    listarPacientes,
    detallePaciente,
    registrarPaciente,
    actualizarPaciente,
    eliminarPaciente
}