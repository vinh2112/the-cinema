import ListMovies from "components/ListMovies";
import SampleAds from "components/SampleAds";
import SliderMovie from "components/SliderMovie";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import * as actions from "redux/actions";
import { movieState$ } from "redux/selectors";

const MainContainer = styled.div`
  padding: 10px 30px 0 25px;

  @media (max-width: 800px) {
    padding: 10px 25px 0 25px;
  }

  @media (min-width: 1440px) {
    padding: 10px 30px 0 50px;
  }

  @media (min-width: 1920px) {
    padding: 10px 30px 0 60px;
  }
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

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
  padding: 0 0 50px 25px;

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
  const { trending, nowPlaying, upComing, isLoading } =
    useSelector(movieState$);

  useEffect(() => {
    dispatch(actions.fetchHomePage.fetchMoviesRequest());
  }, [dispatch]);
  return (
    <>
      {!isLoading && (
        <MainContainer>
          <SliderMovie movies={trending?.results} />
          <MainWrapper>
            <MainBar>
              <ListMovies
                title="Phim đang chiếu"
                movies={nowPlaying.results?.slice(0, 12)}
              />
              <ListMovies
                title="Phim sắp chiếu"
                movies={upComing.results?.slice(0, 12)}
              />
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
