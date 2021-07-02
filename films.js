document.addEventListener('DOMContentLoaded', function() {

    let modal_container = document.getElementById('modal-container')
    let btn_close = document.getElementById('btn-close')

    // Url list
    let url_best = "http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains="

    let url_top = "http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains="
    let url_top_p2 = "http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=2&rating=&rating_contains=&sort_by=-imdb_score&title=&title_contains=&writer=&writer_contains=&year="

    let url_horror = "http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=horror&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains="
    let url_horror_p2 = "http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=horror&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=2&rating=&rating_contains=&sort_by=-imdb_score&title=&title_contains=&writer=&writer_contains=&year="

    let url_drama = "http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=Drama&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains="
    let url_drama_p2 = "http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=drama&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=2&rating=&rating_contains=&sort_by=-imdb_score&title=&title_contains=&writer=&writer_contains=&year="

    let url_thriller = "http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=Thriller&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains="
    let url_thriller_p2 = "http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=thriller&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=2&rating=&rating_contains=&sort_by=-imdb_score&title=&title_contains=&writer=&writer_contains=&year="


    FetchBestMovie(url_best)

    FetchPage1(url_top, "top")
    FetchPage2(url_top_p2, "top")

    FetchPage1(url_horror, "horror")
    FetchPage2(url_horror_p2, "horror")

    FetchPage1(url_drama, "drama")
    FetchPage2(url_drama_p2, "drama")

    FetchPage1(url_thriller, "thriller")
    FetchPage2(url_thriller_p2, "thriller")


    // Fetch 5 best movies from page 1
    function FetchPage1(url, genre) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                for (let i = 0; i < 5; i++) {
                    let image_film = document.getElementById(`image-${genre}-film${i+1}`);
                    image_film.src = data.results[i].image_url;
                    image_film.addEventListener('click', () => FetchModal(data.results[i].url));
                }
            })
    }

    // Fetch 6 and 7 best movies from page 2
    function FetchPage2(url, genre) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                for (let i = 0; i < 2; i++) {
                    let image_film = document.getElementById(`image-${genre}-film${i+6}`);
                    image_film.src = data.results[i].image_url;
                    image_film.addEventListener('click', () => FetchModal(data.results[i].url));
                }
            })
    }

    // Close Modal on click button close
    btn_close.addEventListener('click', closeModal);

    // Fetch Modal info
    function FetchModal(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                document.getElementById('title-modal').innerHTML = data.title
                document.getElementById('img-modal').src = data.image_url
                document.getElementById('genre-modal').innerHTML = data.genres
                document.getElementById('date-modal').innerHTML = data.date_published
                document.getElementById('rated-modal').innerHTML = data.avg_vote
                document.getElementById('score-modal').innerHTML = data.imdb_score
                document.getElementById('realisateur-modal').innerHTML = data.directors
                document.getElementById('acteurs-modal').innerHTML = data.actors
                document.getElementById('duree-modal').innerHTML = data.duration
                document.getElementById('pays-modal').innerHTML = data.countries
                document.getElementById('boxoffice-modal').innerHTML = data.worldwide_gross_income
                document.getElementById('synopsis-modal').innerHTML = data.long_description
            });
        openModal()
    }

    // Open Modal element
    function openModal() {
        modal_container.classList.add('show');
    }

    // Close Modal element
    function closeModal() {
        modal_container.classList.remove('show');
    }


    // Fetch data of the single Best movie
    function FetchBestMovie(url_best) {
        fetch(url_best)
            .then(response => response.json())
            .then(data => {
                fetch(data.results[0].url)
                    .then(response => response.json())
                    .then(data => {
                        document.getElementById('image-meilleur-film').src = data.image_url
                        document.getElementById('title-meilleur-film').innerText = data.title
                        document.getElementById('synopsis-meilleur-film').innerText = data.long_description
                        document.getElementById('image-meilleur-film').addEventListener('click', () =>  FetchModal(data.url))
                    })
            });
    }

});