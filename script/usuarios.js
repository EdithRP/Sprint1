let formulario= document.getElementById('formulario');
let url='http://localhost:4011/usuarios'
let btnCorreo = document.getElementById('btnCorreo');
let btnEditar = document.getElementById("btnEditar");
let btnEliminar= document.getElementById("btnEliminar");

formulario.addEventListener('submit',async(e) =>{
    e.preventDefault();
    let name= document.getElementById('name').value;
     let email= document.getElementById('email').value;
     let usuario= document.getElementById('usuario').value;
     let contraseña= document.getElementById('contraseña').value;
    
 await fetch(url,{
  method:'POST',
  body:JSON.stringify({
      name,
      email,
      usuario,
      contraseña
  }),
  headers:{
      "Content-Type":"application/json"
  }

})})

