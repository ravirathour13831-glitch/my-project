const moviedetail = document.querySelector(".movie-detail")

const params = new URLSearchParams(location.search)

const imdbID = params.get("id")

if (imdbID) {
    searchMovie(imdbID.trim())
}


async function searchMovie(imdbID) {

    let response = await fetch(
        `https://www.omdbapi.com/?apikey=ea9f7881&i=${imdbID}&plot=full`
    )

    let data = await response.json()

    console.log(data)

    if (data.Response === "True") {

        displayMovie(data)

    } else {

        console.log(data.Error)

    }
}


function displayMovie(data) {

    moviedetail.innerHTML = `
        <div>
            <img src="${data.Poster}" alt="${data.Title}">
        </div>

        <div>
            <h2>${data.Title}</h2>

            <section>
                <p>${data.Released}</p>
                <p>${data.Rated}</p>
                <p>${data.Runtime}</p>
                <p>${data.Genre}</p>
                <p>${data.imdbRating}</p>
            </section>

            <div>
                <p>Plot Overview</p>
                <p>${data.Plot}</p>
            </div>

            <div>
                <section>
                    <p>Director</p>
                    <p>${data.Director}</p>
                </section>

                <section>
                    <p>Writer</p>
                    <p>${data.Writer}</p>
                </section>
            </div>

            <div>
                <p>Director</p>
                <p>${data.Director}</p>
            </div>

            <div>
                <section>
                    <p>Language</p>
                    <p>${data.Language}</p>
                </section>

                <section>
                    <p>Country</p>
                    <p>${data.Country}</p>
                </section>
            </div>
        </div>
    `
}