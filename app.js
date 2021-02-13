let api_key = '5744d75cec2bce153e3a00e950e1dbd9'

//let searchText = "don";
$(document).ready(function() {
  $("#search-form").on("submit",function(e) {
    let searchText = $("#search-bar").val();
    //console.log($("#search-bar").val());
    console.log(searchText);

    getMovies(searchText);
    e.preventDefault();

    
   
  })
})



function getMovies(searchText) {

  // $("search-results").show();
  // $("box").show();
  // $("#search-box").hide();
  $('html, body').animate({
    scrollTop: $("#id-search-results").offset().top
}, 2000);


  axios
    .get(
      'https://api.themoviedb.org/3/search/movie?api_key=' + api_key +'&query=' + searchText,
    ) // link to request data based on searched keyword

    .then(function (response) {
      fetchedResults = response.data.results;
      // handle success
      console.log(fetchedResults);
        let output ="";

        

      $.each(fetchedResults, (index, movie) => {

        let imgLink ="";
        if(movie.backdrop_path !==null ){ 
          imgLink = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
          
        }
        else{
          imgLink ="https://homestaymatch.com/images/no-image-available.png"
          // imgLink="https://image.tmdb.org/t/p/w500/52AfXWuXCHn3UjD17rBruA9f5qb.jpg"
        }


        output += `
                <div class="card-holder" >
                
                <div class="movie-name">${movie.original_title}</div>
                <div class="movie-releaseDate">${movie.release_date}</div>
                <div class="movie-image">
                    <img src="${imgLink}" alt="" srcset="" height="120" >
                </div>

                <div class="movie-stats">
                    <div class="likes">
                        <span>❤️ Likes :</span>
                        <span id="likes-count"> ${movie.vote_average}/10</span>
                    </div>
                    <div class="seprator"> | </div>
                    <div class="views">
                        <span>📽️ Views :</span>
                        <span id="view-count">${movie.vote_count}</span>
                    </div>
                </div>
                <div class="movie-overview">
                    <span class="movie-overview-text" > ${movie.overview} </span>
                </div>

                <div class="movie-links">
               
                    <a class="movie-source" href="https://www.imdb.com/find?q=${movie.title}">🕹️ IMdB</a> <!--Implemented IMDB Search -->
            
                    <a class="movie-trailer" href="http://">🍿 Trailer</a>
                </div>
            </div>
    
        
        `;
            $("#card-container").html(output);

      })
    })
    .catch(function (error) {
      // handle error
      console.log(error)
    })
    .then(function () {
      // always executed
    })

}


function btn(){
  getMovies(searchText);
}

// https://api.themoviedb.org/3/search/movie?api_key=5744d75cec2bce153e3a00e950e1dbd9&query=Jack+Reacher

// https://image.tmdb.org/t/p/w500/52AfXWuXCHn3UjD17rBruA9f5qb.jpg

