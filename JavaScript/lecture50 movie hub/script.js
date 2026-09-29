const searchmovie = document.querySelector("#seachMovie");
const movieinput = document.querySelector("#movieInput");
const moviehub = document.querySelector("#movieHub");

searchmovie.addEventListener("submit", (e) => {

    e.preventDefault();

    let query = movieinput.value.trim();

    if (!query) {
        return;
    }

    moviehub.innerHTML = `<div class="loader"></div>`

    searchMovie(query);

    movieinput.value = "";
});


async function searchMovie(moviename) {

    let response = await fetch(
        `https://www.omdbapi.com/?apikey=ea9f7881&s=${encodeURIComponent(moviename)}`
    );

    let data = await response.json();

    console.log(data);

    if (data.Response === "True") {

        displayMovie(data.Search);

    } else {

        moviehub.innerHTML = `<p>${data.Error}</p>`;
    }
}


function displayMovie(movies) {

    moviehub.innerHTML = "";

    movies.forEach((movie) => {

        const div = document.createElement("div");

        div.dataset.imdbID = movie.imdbID;

        div.setAttribute("class", "movie-card");

        div.innerHTML = `
            <div>
                <img src="${movie.Poster}" alt="${movie.Title}">
            </div>

            <div>
                <p>${movie.Title}</p>
                <p>${movie.Year}</p>
            </div>
        `;

        moviehub.append(div);
    });
}




moviehub.addEventListener("click", (e) => {

    const movieCard = e.target.closest(".movie-card");

    if (!movieCard) {
        return;
    }

    const imdbID = movieCard.dataset.imdbID;

    location.href = `movie-details.html?id=${imdbID}`;
});