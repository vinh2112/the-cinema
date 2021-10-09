import MovieCard from "components/MovieCard";
import React, { useEffect, useState, useRef } from "react";
import {
  Container,
  Title,
  MovieWrapper,
  MovieContainer,
} from "./SliderMovieElements";

const getMaxIndex = (width) => {
  if (width <= 640) return 7;
  else if (width <= 800) return 5;
  else if (width <= 1100) return 4;
  else if (width > 1100) return 3;
};

export default function SliderMovie({ movies }) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef();

  function resetTimeOut() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeOut();

    timeoutRef.current = setTimeout(() => {
      const width = window.innerWidth;
      setIndex((prev) =>
        prev > getMaxIndex(width) - 1
          ? 0
          : prev === getMaxIndex(width) - 1
          ? 0
          : prev + 1
      );
    }, 5000);

    return () => {
      resetTimeOut();
    };
  }, [index]);

  return (
    <>
      {movies && (
        <Container>
          <Title>
            <span>★</span> Trending
          </Title>
          <MovieContainer id="trending-movie">
            <MovieWrapper
              style={{
                transform: `translate3d(calc(( ${index} * calc(-100% - 10px))), 0, 0)`,
              }}
            >
              {movies.slice(0, 15).map((movie) => (
                <MovieCard key={movie.id} movie={movie} size="lg" />
              ))}
            </MovieWrapper>
          </MovieContainer>
        </Container>
      )}
    </>
  );
}
