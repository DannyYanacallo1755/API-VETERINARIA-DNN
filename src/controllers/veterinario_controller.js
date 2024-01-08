// Metodo para el login
const login =(req,res)=>{
    res.status(200).json({res:'login del veterinario'})
}
// Metodo para mostrar el perfil
const perfil=(req,res)=>{
    res.status(200).json({res:'perfil del veterinario'})
}
// Metodo para el registro
const registro =(req,res)=>{
    res.status(200).json({res:'registro de un nuevo veterinario'})
}
// Metodo para confirmar el token
const confirmEmail = (req,res)=>{
    res.status(200).json({res:'confirmar email de registro de veterinario'})
}
// Metodo para listar veterinarios
const listarVeterinarios = (req,res)=>{
    res.status(200).json({res:'lista de veterinarios registrados'})
}
// Metodo para mostrar el detalle de un veterinario en particular
const detalleVeterinario = (req,res)=>{
    res.status(200).json({res:'detalle de un eterinario registrado'})
}
// Metodo para Actuarlizar el perfil de un veterinario
const actualizarPerfil = (req,res)=>{
    res.status(200).json({res:'actualizar perfil de un veterinario registrado'})
}
// Metodo para actualizar contraseña
const actualizarPassword = (req,res)=>{
    res.status(200).json({res:'actualizar password de un veterinario registrado'})
}
// Metodo para recuperar contraseña
const recuperarPassword= (req,res)=>{
    res.status(200).json({res:'enviar mail recuperación'})
}
// Metodo para comprobar el token
const comprobarTokenPasword= (req,res)=>{
    res.status(200).json({res:'verificar token mail'})
}
// Metodo para crear nuevva contraseña
const nuevoPassword= (req,res)=>{
    res.status(200).json({res:'crear nuevo password'})
}

export {
    login,
    perfil,
    registro,
    confirmEmail,
    listarVeterinarios,
    detalleVeterinario,
    actualizarPerfil,
    actualizarPassword,
	recuperarPassword,
    comprobarTokenPasword,
	nuevoPassword
}