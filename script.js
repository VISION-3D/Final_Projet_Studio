// 🎥 Liste de 15 films (titre + poster TMDb + lien YouTube)
const movies = [
  {
    title: "The Matrix",
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    url: "https://www.youtube.com/watch?v=vKQi3bBA1y8"
  },
  {
    title: "Inception",
    poster: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    url: "https://www.youtube.com/watch?v=YoHD9XEInc0"
  },
  {
    title: "Interstellar",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    url: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
  },
  {
    title: "Avengers: Endgame",
    poster: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    url: "https://www.youtube.com/watch?v=TcMBFSGVi1c"
  },
  {
    title: "Iron Man",
    poster: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
    url: "https://www.youtube.com/watch?v=8ugaeA-nMTc"
  },
  {
    title: "Spider-Man: No Way Home",
    poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    url: "https://www.youtube.com/watch?v=JfVOs4VSpmA"
  },
  {
    title: "Batman Begins",
    poster: "https://image.tmdb.org/t/p/w500/1P3ZyEq02wcTMd3iE4ebtLvncvH.jpg",
    url: "https://www.youtube.com/watch?v=neY2xVmOfUM"
  },
  {
    title: "The Dark Knight",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    url: "https://www.youtube.com/watch?v=EXeTwQWrcwY"
  },
  {
    title: "The Dark Knight Rises",
    poster: "https://image.tmdb.org/t/p/w500/hr0L2aueqlP2BYUblTTjmtn0hw4.jpg",
    url: "https://www.youtube.com/watch?v=g8evyE9TuYk"
  },
  {
    title: "Black Panther",
    poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    url: "https://www.youtube.com/watch?v=xjDjIWPwcPU"
  },
  {
    title: "Doctor Strange",
    poster: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
    url: "https://www.youtube.com/watch?v=Lt-U_t2pUHI"
  },
  {
    title: "Captain Marvel",
    poster: "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
    url: "https://www.youtube.com/watch?v=Z1BCujX3pw8"
  },
  {
    title: "Guardians of the Galaxy",
    poster: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
    url: "https://www.youtube.com/watch?v=d96cjJhvlMA"
  },
  {
    title: "Thor: Ragnarok",
    poster: "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
    url: "https://www.youtube.com/watch?v=ue80QwXMRHg"
  },
  {
    title: "Avatar",
    poster: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    url: "https://www.youtube.com/watch?v=5PSNL1qE6VY"
  }
];

// 🎞️ Injecter les films dans la page
const container = document.getElementById("movies-container");
function displayMovies(list) {
  container.innerHTML = "";
  list.forEach(movie => {
    container.innerHTML += `
      <div class="movie-card">
        <img src="${movie.poster}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <button onclick="window.open('${movie.url}', '_blank')">▶ Regarder</button>
      </div>
    `;
  });
}
displayMovies(movies);

// 🔍 Recherche d’un film
document.getElementById("searchInput").addEventListener("input", function() {
  const query = this.value.toLowerCase();
  const filtered = movies.filter(m => m.title.toLowerCase().includes(query));
  displayMovies(filtered);
});
