import React from "react";
import {
  Container,
  ListSeason,
  PosterLink,
  Season,
  SeasonContent,
  SeasonWrapper,
  Title,
} from "./SeasonSectionElements";
import "moment/locale/vi";
import moment from "moment";

export default function SeasonSection({ seasons, name }) {
  return (
    <>
      {seasons && (
        <Container>
          <Title>Seasons</Title>
          <ListSeason>
            <SeasonWrapper>
              {seasons.map((season) => (
                <Season key={season.id}>
                  <PosterLink to="">
                    <img
                      className="poster"
                      src={`https://image.tmdb.org/t/p/w300/${season.poster_path}`}
                      alt={season.name}
                    />
                  </PosterLink>

                  <SeasonContent>
                    <div>
                      <div className="season-name">{season.name}</div>
                      <div className="season-info">
                        {new Date(season.air_date).getFullYear()} |{" "}
                        {season.episode_count} Tập
                      </div>
                      <div className="season-desc">
                        {season.name} của {name} ra mắt{" "}
                        {moment(season.air_date).format("L")}
                      </div>
                    </div>
                  </SeasonContent>
                </Season>
              ))}
            </SeasonWrapper>
          </ListSeason>
        </Container>
      )}
    </>
  );
}
