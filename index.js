const movie = [
    {
    title: "You",
    year: 2018,
    genre: "Thriller psicologico",
    rating: 8,
    type: "tv",
    seasons:3,
    },
    {
    title: "Trainspotting",
    year: 1996,
    genre: "Drama",
    rating: 8.8,
    type: "movie",
    },
    {
    title: "Breaking Bad",
    year: 2008,
    genre: "Drama",
    rating: 9.5,
    type: "tv",
    seasons:5,
    },
    {
    title: "Profumo - Storia di un assassino",
    year: 2006,
    genre: "Drama",
    rating: 7,
    type: "movie",
    },
];

class Movie {
    title;
    year;
    genre;
    rating;
    type;
  
    constructor(title, year, genre, rating, type) {
      // usiamo i setter marca e anno per validare i dati in ingresso
      this.title = title;
      this.year = year;
      this.genre = genre;
      this.rating = rating;
      this.type = type;
    }
  }

class TvSeries extends Movie {
    seasons;
     
    constructor(title, year, genre, rating, type, seasons) {
      // super invoca il costruttore della classe padre
      super(title, year, genre, rating, type);
  
      this.seasons = seasons;
    }
}