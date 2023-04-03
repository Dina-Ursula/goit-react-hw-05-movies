import { useEffect, useState } from 'react';
const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=b32001baa4069f0370377782fb699772'
    )
      .then(response => {
        if (!response.ok) {
          console.log('Error getting trending');
        }
        return response.json();
      })
      .then(data => {
        setMovies(
          data.results.map(movie => {
            return {
              id: movie.id,
              title: movie.title,
            };
          })
        );
      });
  });
  // /trending/get-trending

  //   https://api.themoviedb.org/3/movie/550?api_key=b32001baa4069f0370377782fb699772

  return (
    <div>
      <main>
        <h2>Trending today</h2>
        <ul>
          {movies.map(movie => {
            return (
              <li id={movie.id}>
                <a href={'/movies/' + movie.id}>{movie.title}</a>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default Home;
