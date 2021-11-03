let btn = document.getElementById("btnModal");
let modal = document.getElementById("tvesModal");
let span = document.getElementsByClassName("close")[0];
let body = document.getElementsByTagName("body")[0];
let url='http://localhost:4011/usuarios'
let btnCorreo = document.getElementById('btnCorreo');
let btnEditar = document.getElementById("btnEditar");
let btnEliminar= document.getElementById("btnEliminar");
let ocultar = document.getElementById("ocultar");

btn.addEventListener('click',(e) =>{
e.preventDefault();
        modal.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
        ocultar.style.opacity = 0;

     btnCorreo.onclick = function() {
        ocultar.style.opacity = 1;
     }
 
    span.onclick = function() {
        modal.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
})

// Segunda parte buscar correo


btnCorreo.addEventListener('click',async(e) =>{
    e.preventDefault();
    let email=document.getElementById("email2").value
    console.log(email);
    const datos= await fetch(url);
    console.log(datos);
    const data= await datos.json();
   
  //buscar
    console.log(data);
    const buscado= data.find(user => user.email.toLowerCase() === email.toLowerCase());
    console.log(buscado);
    document.getElementById("email2").setAttribute("readonly",true)
  //destructurar
    const{id, name, usuario, contraseña}=buscado;
        document.querySelector('#name2').value = name;
        document.querySelector('#usuario2').value = usuario;
        document.querySelector('#contraseña2').value =contraseña;
        document.getElementById('id').value = id;
       
    
})

btnEditar.addEventListener('click',async(e) =>{
    e.preventDefault();
let id =document.getElementById('id').value
let name =document.getElementById('name2').value
let email =document.getElementById('email2').value
let usuario =document.getElementById('usuario2').value
let contraseña =document.getElementById('contraseña2').value
console.log(name);
console.log(email); 

    await fetch(`${url}/${id}`,{
        method:'PUT',
        body:JSON.stringify({
            name,
            email,
            usuario,
            contraseña,
            id
        }),
        headers:{
            "Content-Type":"application/json"
        }
      })

})

btnEliminar.addEventListener('click',async(e) =>{
let id =document.getElementById('id').value

try{
    await fetch(`${url}/${id}`,{
        method:'DELETE'    
      })
     }
    catch(e){
        console.WriteLine("Mensaje: "+ e.Message)
     
    }
})
