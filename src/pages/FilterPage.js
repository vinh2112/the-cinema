import FilterSection from "components/FilterSection";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SearchAPI } from "api";
import ListMovies from "components/MoviesList";
import { useDispatch, useSelector } from "react-redux";
import { movieState$, tvState$ } from "redux/selectors";
import * as actions from "redux/actions";

const FilterPageContainer = styled.div`
  width: 100%;
  padding-top: 20px;
`;

const FilterPageContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px 25px 25px;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 0 25px 20px 25px;
  }

  @media (max-width: 640px) {
    padding: 0 20px 20px;
  }
`;

const FilterMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 1000px) {
    order: 2;
  }
`;

const FilterMainHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.primary};
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 10%);
  border-radius: 5px;
  overflow: hidden;
  font-size: 16px;
  font-weight: 700;
`;

export default function FilterPage({ type, filter }) {
  const dispatch = useDispatch();
  const [genresSelected, setGenresSelected] = useState([]);
  const [genres, setGenres] = useState([]);
  const { popular, topRated } = useSelector(
    type === "movie" ? movieState$ : tvState$
  );

  useEffect(() => {
    const getGenres = async () => {
      await SearchAPI.getGenres(type)
        .then((res) => setGenres(res.data.genres))
        .catch((err) => console.log(err));
    };

    getGenres();
  }, [type]);

  useEffect(() => {
    if (type === "movie") {
      dispatch(actions.fetchMoviesByType.fetchMoviesByTypeRequest(filter));
    }
  }, [filter, type, dispatch]);

  const handleSelectGenre = (e) => {
    const value = e.target.value;
    if (genresSelected.includes(e.target.value)) {
      const newGenresSelected = genresSelected.filter(
        (genre) => genre !== value
      );
      setGenresSelected(newGenresSelected);
      dispatch(
        actions.fetchMoviesFilter.fetchMoviesFilterRequest({
          type: type,
          filter: filter,
          genres: newGenresSelected,
        })
      );
    } else {
      setGenresSelected([...genresSelected, value]);
      dispatch(
        actions.fetchMoviesFilter.fetchMoviesFilterRequest({
          type: type,
          filter: filter,
          genres: [...genresSelected, value],
        })
      );
    }
  };

  return (
    <FilterPageContainer>
      <FilterPageContent>
        <FilterMain>
          <FilterMainHeader>Phổ biến</FilterMainHeader>
          <ListMovies movies={popular?.results || topRated?.results} />
        </FilterMain>
        <FilterSection genres={genres} selectGenres={handleSelectGenre} />
      </FilterPageContent>
    </FilterPageContainer>
  );
}
