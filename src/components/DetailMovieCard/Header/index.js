import React, { useEffect, useState } from "react";
import {
  ButtonWrapper,
  Certification,
  Container,
  Detail,
  DetailMovie,
  GenreLink,
  Info,
  LogoCompany,
  Poster,
  PosterSide,
  PosterWrapper,
  ProducedBy,
  RatingWrapper,
  Title,
  Wrapper,
} from "./DetailHeaderElement";
import { Rating } from "@mui/material";
import "moment/locale/vi";
import moment from "moment";
import * as CONTANT from "constant";
import { movieState$ } from "redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { showModal } from "redux/actions";

export default function DetailHeader() {
  const [certification, setCertification] = useState("");
  const { detail } = useSelector(movieState$);
  const dispatch = useDispatch();

  useEffect(() => {
    const getRegionUS = (list) => {
      if (list) {
        const country = list.find((item) => item.iso_3166_1 === "US");
        country && setCertification(country.certification);
      }
    };
    getRegionUS(detail?.releases.countries);
  }, [detail]);

  useEffect(() => {
    if (detail) document.title = "The CINEMA | " + detail.title;
  }, [detail]);

  const handleWatchMovie = () => {
    dispatch(
      showModal(
        <iframe
          src={`https://www.2embed.ru/embed/tmdb/movie?id=${detail.id}`}
          frameborder="0"
          width="100%"
          height="100%"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
          allowfullscreen
          title="The movie modal"
        ></iframe>
      )
    );
  };

  return (
    <>
      {detail && (
        <Container url={`https://image.tmdb.org/t/p/original${detail.backdrop_path}`}>
          <Wrapper>
            <DetailMovie>
              <PosterSide>
                <PosterWrapper>
                  <Poster
                    src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${detail.poster_path}`}
                  />
                </PosterWrapper>
                <ButtonWrapper onClick={handleWatchMovie}>
                  <div className="btn__content">Xem phim</div>
                  <Icon icon="bi:play-fill" />
                </ButtonWrapper>
              </PosterSide>

              <Detail>
                <Title>
                  <div className="title">
                    {certification && <Certification>{certification}</Certification>}
                    {detail.title}&nbsp;
                  </div>
                  <div className="released-date">
                    {moment(detail.release_date).format("L")} (VN)
                  </div>
                  <div className="genres">
                    {detail.genres.map((genre) => (
                      <GenreLink key={genre.id} to="#">
                        {genre.name}
                      </GenreLink>
                    ))}
                  </div>

                  <RatingWrapper>
                    <Rating
                      name="read-only"
                      precision={0.5}
                      value={detail.vote_average}
                      max={10}
                      size="large"
                      readOnly
                    />
                  </RatingWrapper>

                  <div className="runtime">
                    <span>Thời lượng: </span> {detail.runtime} phút
                  </div>
                </Title>

                <Info>
                  <div className="title">Nội dung</div>
                  <div className="over-view">{detail.overview}</div>
                </Info>

                <ProducedBy>
                  {detail.production_companies
                    .slice(0, 4)
                    .map(
                      (company) =>
                        company.logo_path && (
                          <LogoCompany
                            key={company.id}
                            src={`${CONTANT.URL_IMAGE}${company.logo_path}`}
                            alt={company.name}
                          />
                        )
                    )}
                </ProducedBy>
              </Detail>
            </DetailMovie>
          </Wrapper>
        </Container>
      )}
    </>
  );
}
