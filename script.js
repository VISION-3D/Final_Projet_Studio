const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('search');
const moviesContainer = document.getElementById('moviesContainer');

// Liste complète de films avec affiches TMDb et liens vidéo (exemple)
const allMovies = [

    {title: "Le Roi Lion", overview: "Un jeune lion nommé Simba doit retrouver sa place en tant que roi.", poster_path: "https://image.tmdb.org/t/p/w500/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg", video_url: "videos/le-roi-lion.mp4"},
    {title: "Forrest Gump", overview: "Les aventures extraordinaires de Forrest à travers l’histoire américaine.", poster_path: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg", video_url: "videos/forrest-gump.mp4"},
    {title: "Titanic", overview: "L’histoire tragique d’amour à bord du célèbre paquebot.", poster_path: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg", video_url: "videos/titanic.mp4"},
    {title: "Interstellar", overview: "Des explorateurs voyagent à travers l’espace pour sauver l’humanité.", poster_path: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", video_url: "videos/interstellar.mp4"},
    {title: "Gladiator", overview: "Maximus cherche à venger la mort de sa famille dans l’arène.", poster_path: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg", video_url: "videos/gladiator.mp4"},
    {title: "The Dark Knight", overview: "Batman affronte le Joker pour protéger Gotham City.", poster_path: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", video_url: "videos/the-dark-knight.mp4"},
    {title: "The Matrix", overview: "Neo découvre la vérité sur la réalité et rejoint la lutte contre les machines.", poster_path: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", video_url: "videos/the-matrix.mp4"},
    {title: "Avengers: Endgame", overview: "Les Avengers unissent leurs forces pour vaincre Thanos.", poster_path: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg", video_url: "videos/avengers-endgame.mp4"},
    {title: "Shang-Chi and the Legend of the Ten Rings", overview: "Shang-Chi découvre son héritage et affronte son père.", poster_path: "https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg", video_url: "videos/shang-chi.mp4"},
    {title: "Spider-Man: Far From Home", overview: "Peter Parker part en voyage scolaire et affronte Mysterio.", poster_path: "https://image.tmdb.org/t/p/w500/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg", video_url: "videos/spiderman-far-from-home.mp4"},
    {title: "Avengers: Infinity War", overview: "Les Avengers affrontent Thanos pour empêcher la destruction de l'univers.", poster_path: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg", video_url: "videos/avengers-infinity-war.mp4"},
    {title: "Captain Marvel", overview: "Carol Danvers devient Captain Marvel et défend la Terre contre une invasion extraterrestre.", poster_path: "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg", video_url: "videos/captain-marvel.mp4"},
    {title: "Spider-Man: Across the Spider-Verse", overview: "Miles Morales rencontre de nouveaux Spider-Héros dans le multivers.", poster_path: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg", video_url: "videos/spiderman-across.mp4"},
    {title: "John Wick: Chapter 4", overview: "John Wick poursuit sa quête de vengeance contre la Haute Table.", poster_path: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg", video_url: "videos/john-wick-4.mp4"},
    {title: "The Super Mario Bros. Movie", overview: "Mario et Luigi partent en aventure pour sauver le Royaume Champignon.", poster_path: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg", video_url: "videos/super-mario.mp4"},
    {title: "The Flash", overview: "Barry Allen voyage dans le temps pour sauver sa mère et l'univers.", poster_path: "https://image.tmdb.org/t/p/w500/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg", video_url: "videos/the-flash.mp4"},
    {title: "The Hunger Games: The Ballad of Songbirds & Snakes", overview: "L'histoire de la jeunesse de Coriolanus Snow avant qu'il ne devienne président.", poster_path: "https://image.tmdb.org/t/p/w500/lP5eKh8WOcPysfELrUpGhHJGZEH.jpg", video_url: "videos/hunger-games-2.mp4"},
    {title: "Fast X", overview: "La famille Toretto fait face à une nouvelle menace mondiale.", poster_path: "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg", video_url: "videos/fast-x.mp4"},
    {title: "Shazam! Fury of the Gods", overview: "Shazam affronte les filles de l'Atlas pour sauver le monde.", poster_path: "https://image.tmdb.org/t/p/w500/h8gHn0OzBoaefsYseUByqsmEDMY.jpg", video_url: "videos/shazam.mp4"},
    {title: "Aquaman and the Lost Kingdom", overview: "Aquaman doit protéger les océans d'une nouvelle menace.", poster_path: "https://image.tmdb.org/t/p/w500/xLPffWMhMj1l50ND3KchMjYoKmE.jpg", video_url: "videos/aquaman-2.mp4"},
    {title: "Doctor Strange in the Multiverse of Madness", overview: "Doctor Strange explore le multivers pour sauver l'univers.", poster_path: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg", video_url: "videos/doctor-strange-2.mp4"},
    {title: "Thor: Love and Thunder", overview: "Thor se lance dans une quête pour retrouver la paix intérieure.", poster_path: "https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg", video_url: "videos/thor-love-thunder.mp4"},
    {title: "Black Panther: Wakanda Forever", overview: "Wakanda fait face à de nouveaux défis après la perte de leur roi.", poster_path: "https://image.tmdb.org/t/p/w500/ps2oKfhY6DL3alynlSqY97gHSsg.jpg", video_url: "videos/black-panther-2.mp4"},
    {title: "Avatar: The Way of Water", overview: "Jake Sully et Neytiri explorent les océans de Pandora.", poster_path: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg", video_url: "videos/avatar-2.mp4"},
    {title: "Jurassic World Dominion", overview: "Les dinosaures vivent désormais parmi les humains.", poster_path: "https://image.tmdb.org/t/p/w500/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg", video_url: "videos/jurassic-world.mp4"},
    {title: "The Batman", overview: "Batman enquête sur une série de crimes à Gotham City.", poster_path: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg", video_url: "videos/the-batman.mp4"},
    {title: "Doctor Strange", overview: "Le Dr Stephen Strange découvre le monde de la magie.", poster_path: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg", video_url: "videos/doctor-strange.mp4"},
    {title: "Black Panther", overview: "T'Challa revient chez lui pour devenir le roi du Wakanda.", poster_path: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg", video_url: "videos/black-panther.mp4"},
    {title: "Wonder Woman", overview: "Diana, princesse des Amazones, part sauver le monde.", poster_path: "https://image.tmdb.org/t/p/w500/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg", video_url: "videos/wonder-woman.mp4"},
    {title: "Aquaman", overview: "Arthur Curry doit protéger Atlantis et le monde des océans.", poster_path: "https://image.tmdb.org/t/p/w500/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg", video_url: "videos/aquaman.mp4"}
];


// Fonction pour afficher les films
function displayMovies(movies) {
    moviesContainer.innerHTML = '';
    if (!movies || movies.length === 0) {
        moviesContainer.innerHTML = 'Aucun film trouvé.';
        return;
    }
    movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${movie.poster_path}" alt="${movie.title}">
            <div class="card-content">
                <h3>${movie.title}</h3>
                <p>${movie.overview}</p>
            </div>
        `;

        // Au clic sur la carte, démarre le film
        card.addEventListener('click', () => {
            const videoPlayer = document.createElement('video');
            videoPlayer.src = movie.video_url;
            videoPlayer.controls = true;
            videoPlayer.autoplay = true;
            videoPlayer.style.width = '100%';
            videoPlayer.style.maxHeight = '80vh';

            moviesContainer.innerHTML = '';
            moviesContainer.appendChild(videoPlayer);
        });

        moviesContainer.appendChild(card);
    });
}

// Affichage initial
displayMovies(allMovies);

// Recherche locale
searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim().toLowerCase();
    const filteredMovies = allMovies.filter(movie => 
        movie.title.toLowerCase().includes(query) || movie.overview.toLowerCase().includes(query)
    );
    displayMovies(filteredMovies);
});
