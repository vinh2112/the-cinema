import React from "react";
import { Container, MovieName, Poster, Wrapper, OverLay, PlayButton, Button } from "./MovieCard";
import { Icon } from "@iconify/react";

export default function MovieCard({ movie, type }) {
  return (
    <Container>
      <Wrapper to={`/${movie.media_type || type}/${movie.id}`}>
        <Poster
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={`poster ${movie.name || movie.title}`}
        />
        <OverLay>
          <MovieName>
            <div>{movie?.original_name || movie?.original_title}</div>
            <div>{movie?.name || movie?.title}</div>
          </MovieName>

          <PlayButton>
            <Button>
              <Icon icon="clarity:play-solid" />
            </Button>
          </PlayButton>
        </OverLay>
      </Wrapper>
    </Container>
  );
}
