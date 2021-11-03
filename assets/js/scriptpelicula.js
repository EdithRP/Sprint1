let btn = document.getElementById("btnModal");
let modal = document.getElementById("tvesModal");
let span = document.getElementsByClassName("close")[0];
let body = document.getElementsByTagName("body")[0];
let url='http://localhost:4012/peliculas'
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
    let name=document.getElementById("name2").value
    console.log(name);
    const datos= await fetch(url);
    console.log(datos);
    const data= await datos.json();
   
  //buscar
    console.log(data);
    const buscado= data.find(user => user.name.toLowerCase() === name.toLowerCase());
    console.log(buscado);
    document.getElementById("name2").setAttribute("readonly",true)
  //destructurar
    const{id, fecha, director, imagen}=buscado;
        document.querySelector('#fecha2').value = fecha;
        document.querySelector('#director2').value = director;
        document.querySelector('#imagen2').value =imagen;
        document.getElementById('id').value = id;
       
    
})

btnEditar.addEventListener('click',async(e) =>{
    e.preventDefault();
let id =document.getElementById('id').value
let name =document.getElementById('name2').value
let fecha =document.getElementById('fecha2').value
let director =document.getElementById('director2').value
let imagen =document.getElementById('imagen2').value
console.log(name);

    await fetch(`${url}/${id}`,{
        method:'PUT',
        body:JSON.stringify({
            name,
            fecha,
            director,
            imagen,
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
