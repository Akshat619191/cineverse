function MovieCatalog() {
  const movies = [
    {
      id: 1,
      title: "Avengers: Endgame",
      genre: "Action",
      rating: "8.5"
    },
    {
      id: 2,
      title: "Interstellar",
      genre: "Sci-Fi",
      rating: "8.7"
    },
    {
      id: 3,
      title: "The Batman",
      genre: "Action",
      rating: "8.1"
    },
    {
      id: 4,
      title: "Joker",
      genre: "Drama",
      rating: "8.4"
    }
  ];

  return (
    <div>
      <h1>Movie Catalog</h1>

      {movies.map((movie) => (
        <div
          key={movie.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px",
            borderRadius: "8px"
          }}
        >
          <h3>{movie.title}</h3>
          <p>Genre: {movie.genre}</p>
          <p>Rating: {movie.rating}</p>

          <button>Book Now</button>
        </div>
      ))}
    </div>
  );
}

export default MovieCatalog;