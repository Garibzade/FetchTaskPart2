fetch('https://api.tvmaze.com/shows')
.then(res=>res.json())
.then(data=>{getFilms(data);
})


var film=document.getElementById("films-psy");
function getFilms(films){
  film.innerHTML="";
  
  
  
  
  films
  
  .forEach(char=>{
    film.innerHTML+=
    
    `<div class="col-md-2">
    <img src="${char.image.medium}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${char.name}</h5>
    <p></p>
    <p class="card-text">IMDB:${char.rating.average}</p>
    <p class="card-text">Dil:${char.language}</p>
    <p class="card-text">Kateqoriya:${char.genres}</p>
    
    <a href="#" class="btn btn-primary">Etrafli melumat</a>
    </div>
    </div>`;
  })
}



function searchShows(query) {
  axios.get(`https://api.tvmaze.com/search/shows?q=${query}`)
  .then(response => {
    getFilms(response.data.map(item => item.show));
  })
  
}
const searchForm = document.getElementById("search-form")
searchForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const searchInput = document.getElementById("search-film")
  const query = searchInput.value;
  searchShows(query);


;});










// const filmsearch=document.getElementById("search-film")
// const search=[]
// filmsearch.addEventListener("change",(e)=>{
//   search.length=0
//   search.push(e.target.value)
//   console.log(search)
  
// }
// )

// console.log(filmsearch)