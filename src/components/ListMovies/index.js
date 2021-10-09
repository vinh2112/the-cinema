import MovieCard from "components/MovieCard";
import React from "react";
import { Container, MoviesWrapper, Title } from "./ListMoviesElements";

export default function ListMovies({ title, movies }) {
  return (
    <>
      {movies && (
        <Container>
          <Title>{title}</Title>
          <MoviesWrapper>
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} size="sm" type="movie" />
            ))}
          </MoviesWrapper>
        </Container>
      )}
    </>
  );
}
