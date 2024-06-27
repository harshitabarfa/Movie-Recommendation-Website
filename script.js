const dropDown = document.querySelector("#genres");
const playBtn = document.querySelector("#play-Btn");
const moviePoster = document.querySelector("#movie-Poster");
const movieText = document.querySelector("#movie-Text");
const NextBtn = document.querySelector("#next-Btn");

const request = new XMLHttpRequest();
request.open(
  "GET",
  `https://api.themoviedb.org/3/genre/movie/list?api_key=bd34d0105dfc97e9d868378515a3d105`
);
request.send();
request.addEventListener("load", function () {
  const data = JSON.parse(request.responseText);
  console.log(data);

  data.genres.forEach((genres) => {
    const options = document.createElement("option");
    options.text = genres.name;
    options.value = genres.id;
    dropDown.add(options);
  });
});

const request1 = new XMLHttpRequest();
request1.open(
  "GET",
  `https://api.themoviedb.org/3/discover/movie?api_key=bd34d0105dfc97e9d868378515a3d105`
);
request1.send();
request1.addEventListener("load", function () {
  const data = JSON.parse(request1.responseText);
  console.log(data);
});

const request2 = new XMLHttpRequest();
request2.open(
  "GET",
  `https://api.themoviedb.org/3/discover/movie?api_key=bd34d0105dfc97e9d868378515a3d105&with_genres=28`
);
request2.send();
request2.addEventListener("load", function () {
  const data = JSON.parse(request2.responseText);
  console.log(data);
});

playBtn.addEventListener("click", () => {
  const selectGenreId = dropDown.value;
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://api.themoviedb.org/3/discover/movie?api_key=bd34d0105dfc97e9d868378515a3d105&with_genres=${selectGenreId}`
  );

  xhr.send();

  xhr.addEventListener("load", () => {
    const moviePage = JSON.parse(xhr.responseText);
    console.log(moviePage);

    const movies = moviePage.results;
    const randomIndex = Math.floor(Math.random() * movies.length);
    console.log(randomIndex);

    const randomMovie = movies[randomIndex];
    console.log(randomMovie);

    const movieTitle = randomMovie.original_title;
    console.log(movieTitle);

    const movieImg = randomMovie.poster_path;
    console.log(movieImg);

    const movieOverview = randomMovie.overview;
    console.log(movieOverview);

    movieText.innerHTML = `<h2>${movieTitle}</h2> <p>${movieOverview}</p>`;

    moviePoster.innerHTML = `<img src="https://image.tmdb.org/t/p/w500/${movieImg}">`;

    playBtn.disabled = true;
    NextBtn.style.display = "Block";
  });
});

NextBtn.addEventListener("click", () => {
  const selectGenreId = dropDown.value;
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://api.themoviedb.org/3/discover/movie?api_key=bd34d0105dfc97e9d868378515a3d105&with_genres=${selectGenreId}`
  );

  xhr.send();

  xhr.addEventListener("load", () => {
    const moviePage = JSON.parse(xhr.responseText);
    console.log(moviePage);

    const movies = moviePage.results;
    const randomIndex = Math.floor(Math.random() * movies.length);
    console.log(randomIndex);

    const randomMovie = movies[randomIndex];
    console.log(randomMovie);

    const movieTitle = randomMovie.original_title;
    console.log(movieTitle);

    const movieImg = randomMovie.poster_path;
    console.log(movieImg);

    const movieOverview = randomMovie.overview;
    console.log(movieOverview);

    movieText.innerHTML = `<h2>${movieTitle}</h2> <p>${movieOverview}</p>`;

    moviePoster.innerHTML = `<img src="https://image.tmdb.org/t/p/w500/${movieImg}">`;

    NextBtn.style.display = "Block";
  });
});

dropDown.addEventListener("change", () => {
  playBtn.disabled = false;
});
