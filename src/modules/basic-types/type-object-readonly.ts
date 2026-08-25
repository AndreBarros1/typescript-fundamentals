type Movie = {
    readonly title: string,
    year: number,
    rating: number
    [key: string | number]: string | number | boolean
} 

type Movies = {
    [key: string]: Movie
}

let movies = {
    movie1: {
        title: "O amanhecer",
        year: 2000,
        rating: 4.5,
        isFavorite: true,
        director: "Cristofer Nolan",
        runtime: 102,
        genre: "Terror"
    },
    movie2: {
        title: "Jackass",
        year: 2026,
        rating: 5,
        isFavorite: false,
        runtime: 102,
        genre: "Comedia"
    },
    movie3: {
        title: "Odyssey",
        year: 2026,
        rating: 4.9,
        isFavorite: true,
        genre: "Aventura"
    }
}

export function showMovies(movies: Movies) {
    //movies.movie1!.title = "O amanhecer 2" // Readonly sendo aplicado no tipo que possui a parametrização por causa do parametro
    console.log(movies)
}


showMovies(movies)


