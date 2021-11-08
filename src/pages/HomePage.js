import ListMovies from "components/MoviesList";
import SampleAds from "components/SampleAds";
// import SliderMovie from "components/SliderMovie";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import * as actions from "redux/actions";
import { movieState$, searchState$, tvState$ } from "redux/selectors";
import HeroSlide from "components/HeroSlide";

const MainContainer = styled.div`
  /* padding: 10px 30px 0 25px;

  @media (max-width: 800px) {
    padding: 10px 25px 0 25px;
  }

  @media (min-width: 1440px) {
    padding: 10px 30px 0 30px;
  }

  @media (min-width: 1600px) {
    padding: 10px 30px 0 50px;
  }

  @media (min-width: 1920px) {
    padding: 10px 30px 0 60px;
  } */
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 30px 0 25px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const MainBar = styled.div`
  flex-shrink: 0;
  width: calc(100% - 300px);

  @media (max-width: 1100px) {
    width: calc(100% - 275px);
  }

  @media (max-width: 1000px) {
    width: calc(100% - 250px);
  }

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (min-width: 1440px) {
    width: calc(100% - 300px);
  }

  @media (min-width: 1600px) {
    width: calc(100% - 325px);
  }

  @media (min-width: 1920px) {
    width: calc(100% - 350px);
  }
`;

const SideBar = styled.aside`
  flex-shrink: 0;
  width: 300px;
  padding: 20px 0 50px 25px;

  @media (max-width: 1100px) {
    width: 275px;
  }

  @media (max-width: 1000px) {
    width: 250px;
  }

  @media (max-width: 900px) {
    padding: 0;
    width: 100%;
  }

  @media (min-width: 1440px) {
    width: 300px;
  }

  @media (min-width: 1600px) {
    width: 325px;
  }

  @media (min-width: 1920px) {
    width: 350px;
  }
`;

export default function HomePage() {
  const dispatch = useDispatch();
  const { trending } = useSelector(searchState$);
  const movie = useSelector(movieState$);
  const tv = useSelector(tvState$);

  useEffect(() => {
    document.title = "The CINEMA | Home";
    dispatch(actions.searchTrending.searchTrendingRequest());
    dispatch(actions.fetchHomePage.fetchMoviesRequest());
    dispatch(actions.getTvShowHomePage.getTvShowHomePageRequest());
  }, [dispatch]);
  return (
    <>
      {!movie.isLoading && trending && (
        <MainContainer>
          <HeroSlide trending={trending?.slice(0, 10)} />
          <MainWrapper>
            <MainBar>
              <ListMovies title="Trending Movies" movies={movie.trending?.results} type="movie" />
              <ListMovies title="Upcoming Movies" movies={movie.upComing?.results} type="movie" />
              <ListMovies title="Trending Tv Shows" movies={tv.trending?.results} type="tv" />
              <ListMovies title="On The Air Tv Shows" movies={tv.onTheAir?.results} type="tv" />
            </MainBar>

            <SideBar>
              <SampleAds />
            </SideBar>
          </MainWrapper>
        </MainContainer>
      )}
    </>
  );
}
