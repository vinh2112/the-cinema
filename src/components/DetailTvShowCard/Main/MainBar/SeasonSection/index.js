import React from "react";
import { Container, ListSeason, PosterLink, Season, SeasonContent, SeasonWrapper, Title } from "./SeasonSectionElements";
import "moment/locale/vi";
import moment from "moment";
import SwiperCore, { Pagination } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

export default function SeasonSection({ seasons, name }) {
  SwiperCore.use([Pagination]);

  return (
    <>
      {seasons && (
        <Container>
          <Title>Seasons</Title>
          <ListSeason>
            <SeasonWrapper>
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
              >
                {seasons.map((season) => (
                  <SwiperSlide key={season.id}>
                    <Season>
                      <PosterLink to="">
                        <img className="poster" src={`https://image.tmdb.org/t/p/w300/${season.poster_path}`} alt={season.name} />
                      </PosterLink>

                      <SeasonContent>
                        <div>
                          <div className="season-name">{season.name}</div>
                          <div className="season-info">
                            {new Date(season.air_date).getFullYear()} | {season.episode_count} Tập
                          </div>
                          <div className="season-desc">
                            {season.name} của {name} ra mắt {moment(season.air_date).format("L")}
                          </div>
                        </div>
                      </SeasonContent>
                    </Season>
                  </SwiperSlide>
                ))}
              </Swiper>
            </SeasonWrapper>
          </ListSeason>
        </Container>
      )}
    </>
  );
}
