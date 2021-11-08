import MovieCard from "components/MovieCard";
import React from "react";
import { Container, Title } from "./ListMoviesElements";
// import SwiperCore, { Navigation } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";

export default function ListMovies({ title, movies, type }) {
  // SwiperCore.use([Navigation]);
  return (
    <>
      {movies && (
        <Container>
          {title && <Title>{title}</Title>}
          <Swiper
            spaceBetween={5}
            slidesPerView={"auto"}
            // navigation
          >
            {movies.map((movie, i) => (
              <SwiperSlide key={i}>
                <MovieCard key={movie.id} movie={movie} type={type} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      )}
    </>
  );
}
