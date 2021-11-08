import React from "react";
import {
  FilterContainer,
  FilterContent,
  FilterGenres,
  FilterGenresHeader,
  FilterHeader,
  FilterWrapper,
  GenreItem,
} from "./FilterSectionElements";
import { Icon } from "@iconify/react";

// const getYears = () => {
//   const currentYear = new Date().getFullYear();
//   const year = [];
//   let startYear = 1980;
//   while (startYear <= currentYear) {
//     year.push(startYear++);
//   }
//   return year;
// };

export default function FilterSection({ genres, selectGenres }) {
  return (
    <FilterContainer>
      <FilterWrapper>
        <input type="checkbox" id="filter" hidden />
        <FilterHeader htmlFor="filter">
          <div className="title">Bộ lọc</div>
          <div className="drop">
            <Icon icon="akar-icons:chevron-down" />
          </div>
        </FilterHeader>

        <FilterContent>
          <FilterGenres>
            <FilterGenresHeader>Thể loại</FilterGenresHeader>
            {genres.length !== 0 &&
              genres.map((genre) => (
                <GenreItem
                  key={genre.id}
                  htmlFor={`genre${genre.id}`}
                  genreId={genre.id}
                >
                  <input
                    hidden
                    type="checkbox"
                    value={genre.id}
                    id={`genre${genre.id}`}
                    onChange={selectGenres}
                  />
                  <div className="genre-label">{genre.name}</div>
                </GenreItem>
              ))}
          </FilterGenres>
        </FilterContent>
      </FilterWrapper>
    </FilterContainer>
  );
}
