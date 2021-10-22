 
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = `https://image.tmdb.org/t/p/w1280`
let templateCard=document.getElementById('template-card').content;
let fragment=document.createDocumentFragment();
let items=document.getElementById('items');


  
    const getMovies=async(url)=>{
       try {            
        const peticion= await fetch(url)
        const pelicula= await peticion.json();
        const data=pelicula.results;
        console.log(data)
        showMovie(data)
        showMoviefilter(data)
} catch(error) {
    console.log(error)
}
}



function showMovie(movie){
    main.innerHTML=''
    movie.forEach(movie=>{
    const{title, poster_path, vote_avarage, overview}=movie;
   
    templateCard.querySelector('h3').textContent=title;
    templateCard.querySelector('img').setAttribute('src',IMG_PATH + poster_path);
    templateCard.querySelector('h4').textContent=vote_avarage; 
    templateCard.querySelector('span').textContent=overview; 
    const clone=templateCard.cloneNode(true);
    fragment.appendChild(clone);   
})

items.appendChild(fragment);

}



function showMoviefilter(movie){
let boton=document.getElementById('btnBuscar');
boton.addEventListener('click',async()=>{
let texto = document.getElementById('inputBuscar').value;

    let busqueda = movie.filter(peli => peli.title.toLowerCase() ==  texto.toLowerCase())
    busqueda.forEach(peli => {
        const{title, poster_path, vote_avarage, overview} = peli;
        templateCard.querySelector('h3').textContent=title;
        templateCard.querySelector('img').setAttribute('src',IMG_PATH + poster_path);
        templateCard.querySelector('h4').textContent=vote_avarage; 
        templateCard.querySelector('span').textContent=overview; 
        const clone=templateCard.cloneNode(true);
        fragment.appendChild(clone);   
    });
    items.innerHTML = "";
    items.appendChild(fragment)})}

    getMovies(API_URL)