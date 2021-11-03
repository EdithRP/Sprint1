let formulario= document.getElementById('formulario');
let url='http://localhost:4012/peliculas'
let btnCorreo = document.getElementById('btnCorreo');
let btnEditar = document.getElementById("btnEditar");
let btnEliminar= document.getElementById("btnEliminar");

formulario.addEventListener('submit',async(e) =>{
    e.preventDefault();
    let name= document.getElementById('name').value;
     let fecha= document.getElementById('fecha').value;
     let director= document.getElementById('director').value;
     let imagen= document.getElementById('imagen').value;
    
 await fetch(url,{
  method:'POST',
  body:JSON.stringify({
      name,
      fecha,
      director,
      imagen
  }),
  headers:{
      "Content-Type":"application/json"
  }

})})