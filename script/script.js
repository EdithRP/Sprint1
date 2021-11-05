
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = `https://image.tmdb.org/t/p/w1280`
let templateCard = document.getElementById('template-card').content;
let fragment = document.createDocumentFragment();
let items = document.getElementById('items');
let menosvaloradas = document.getElementById('menosvaloradas');
let masvaloradas = document.getElementById('masvaloradas');
let todas = document.getElementById('todas');
let main = document.getElementById('main')
let pagina = 1;
let h5=document.getElementById('h5')
const image= document.getElementById('image');
let objeto="";
let mostrador = document.querySelector('.offcanvas-body');



const paginacion = async () => {
    pagina++;
    try {
        API_URLN = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=${pagina}`
        const peticion = await fetch(API_URLN)
        const pelicula = await peticion.json();
        const data = pelicula.results;
        showMovie(data)
    } catch (error) {
        console.log(error)
    }
}

const getMovies = async (url) => {

    try {
        const peticion = await fetch(url)
        const pelicula = await peticion.json();
        const data = pelicula.results;
        showMovie(data)
        showMoviefilter(data)
    } catch (error) {
        console.log(error)
    }
}
getMovies(API_URL)

const getMovies2 = async () => {
    main.innerHTML = ''
    try {
        const peticion = await fetch(API_URL)
        const pelicula = await peticion.json();
        const data = pelicula.results;
        showMovie2(data)
    } catch (error) {
        console.log(error)
    }
}
const getMovies3 = async () => {
    main.innerHTML = ''
    try {
        const peticion = await fetch(API_URL)
        const pelicula = await peticion.json();
        const data = pelicula.results;
        showMovie3(data)
    } catch (error) {
        console.log(error)
    }
}


function getClassByRate(vote) {
    if (vote >= 8.0) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}





const obtenerid = (e) => {
  alert("hola");
    if (e.target.classList.contains('clickimage')) {
       detalle(e.target.parentElement);
    }
    e.stopPropagation();
}
   

    const detalle= async (id) => {
        
    let resp = await fetch(API_URL)
    let pelicula = await resp.json()
    const data = pelicula.results;
    const arregloid = data.find(elegir => elegir.id == id)
    const imagen=IMG_PATH+arregloid.poster_path;
    console.log(arregloid);
    console.log(imagen);

    mostrador.innerHTML = `<div class="className="d-grid gap-2 mx-auto mt-2"">
                          <div class=""d-flex justify-content-center" ">
                          <img id="imagecambio" style="width:100%" src="${imagen}" alt=""></div>
                          <strong><h3 class="d-flex justify-content-left">${arregloid.title}</h3></strong>
                          <h5 class="d-flex justify-content-left">$ ${arregloid.vote_average}.00</h5>
                          <div class="d-flex mt-2">
                          <button id="agregarCarrito" class="aggCar btntrailer" type="button">VER TRAILER</button>
                          <button id="comprar"class="btn btn btnComprar" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">BUY NOW</button></div>
                          <span class="d-flex justify-content-left mt-2"> ${arregloid.overview}</span></div></div>`
}

    

//image.addEventListener('click', obtenerid(e))
function showMovie(movie) {
    main.innerHTML = ''
    movie.forEach(movie => {
        const { title, poster_path, vote_average, overview, id } = movie;
        templateCard.querySelector('h3').textContent = title;
        templateCard.querySelector('img').setAttribute('src', IMG_PATH + poster_path);
        templateCard.querySelector('span').textContent = vote_average;
        templateCard.querySelector('span').setAttribute('class', getClassByRate(vote_average))
        templateCard.querySelector('h4').textContent = overview;
        templateCard.querySelector('button').setAttribute('onclick',  `detalle(${id})`);
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    
    
    })

    items.appendChild(fragment);
    //image.addEventListener('click', e => {
    //    obtenerid(e);})
    
}


function showMoviefilter(movie) {


    let boton = document.getElementById('btnBuscar');
    boton.addEventListener('click', async () => {
        let texto = document.getElementById('inputBuscar').value;

        let busqueda = movie.filter(peli => peli.title.toLowerCase() == texto.toLowerCase())
        busqueda.forEach(peli => {
            const { title, poster_path, vote_avarage, overview } = peli;
            templateCard.querySelector('h3').textContent = title;
            templateCard.querySelector('img').setAttribute('src', IMG_PATH + poster_path);
            templateCard.querySelector('h4').textContent = vote_avarage;
            templateCard.querySelector('span').textContent = overview;
        
            const clone = templateCard.cloneNode(true);
            fragment.appendChild(clone);
        });
        items.innerHTML = "";
        items.appendChild(fragment)
    })
}
const IMAGENES = [
    ('uno'),
    ('dos'),
    ('tres'),
];

const circle1 = document.getElementById('image1');
const circle2 = document.getElementById('image2');
const circle3 = document.getElementById('image3');
const enlace = document.querySelectorAll('#enlace a');

let posicionActual = 0;
let urlimage = "";


function pasarcirculo(num) {
    if (num == 1) {
        posicionActual = 0;
        urlimage = "url('../img/mulan.png')"
    } else if (num == 2) {
        posicionActual = 1;
        urlimage = "url('../img/raya.png')"
    }
    else {
        urlimage = "url('../img/unidos.png')"
        posicionActual = 2;
    }
    renderizarImagen();
}


function renderizarImagen() {
    for (let i = 0; i <= IMAGENES.length - 1; i++) {
        console.log(IMAGENES[i]);
        document.getElementById(IMAGENES[i]).style.opacity = 0
    }
    document.getElementById("rmdb-heroimage").style.backgroundImage = urlimage;
    enlace.forEach(function (element, index) {
        if (index == 0) {
            element.href = "https://www.youtube.com/watch?v=WSgmnyGZ9_Q&t=2s";
        }
        else if (index == 1) {
            element.href = "https://www.youtube.com/watch?v=hTh2-WnW1RI";
        }
        element.href = "https://www.youtube.com/watch?v=LlP26_B9BNU";

    });
    document.getElementById(IMAGENES[posicionActual]).style.opacity = 1;
}


circle2.addEventListener('click', (e) => {
    e.preventDefault();
    pasarcirculo(2)
})

circle3.addEventListener('click', (e) => {
    e.preventDefault();
    pasarcirculo(3)
})

circle1.addEventListener('click', (e) => {
    e.preventDefault();
    pasarcirculo(1)
})



///¡ mas votadas

function showMovie2(movie) {
    main.innerHTML = ""
    items.innerHTML = ""
    movie.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie;
        let numero = parseInt(vote_average);
        console.log(numero);
        if (numero >= 8) {
            templateCard.querySelector('h3').textContent = title;
            templateCard.querySelector('img').setAttribute('src', IMG_PATH + poster_path);
            templateCard.querySelector('span').textContent = vote_average;
            templateCard.querySelector('span').setAttribute('class', getClassByRate(vote_average))
            templateCard.querySelector('h4').textContent = overview;
            const clone = templateCard.cloneNode(true);
            fragment.appendChild(clone);
        }
    })
    items.appendChild(fragment);
}

///¡ menoss votadas
function showMovie3(movie) {
    main.innerHTML = ''
    items.innerHTML = ""
    movie.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie;
        let numero = parseInt(vote_average);
        console.log(numero);
        if (numero <= 5) {
            templateCard.querySelector('h3').textContent = title;
            templateCard.querySelector('img').setAttribute('src', IMG_PATH + poster_path);
            templateCard.querySelector('span').textContent = vote_average;
            templateCard.querySelector('span').setAttribute('class', getClassByRate(vote_average))
            templateCard.querySelector('h4').textContent = overview;
            const clone = templateCard.cloneNode(true);
            fragment.appendChild(clone);
        }
    })
    items.appendChild(fragment);
}

function showMovie4(movie) {
    main.innerHTML = ''
    items.innerHTML = ""
    movie.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie;
        templateCard.querySelector('h3').textContent = title;
        templateCard.querySelector('img').setAttribute('src', IMG_PATH + poster_path);
        templateCard.querySelector('span').textContent = vote_average;
        templateCard.querySelector('span').setAttribute('class', getClassByRate(vote_average))
        templateCard.querySelector('h4').textContent = overview;
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    })

    items.appendChild(fragment);

}


