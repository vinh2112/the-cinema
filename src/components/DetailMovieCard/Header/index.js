import React, { useEffect, useState } from "react";
import {
  Certification,
  Container,
  Detail,
  DetailMovie,
  GenreLink,
  Info,
  LogoCompany,
  Poster,
  PosterWrapper,
  ProducedBy,
  Rating,
  Title,
  Wrapper,
} from "./DetailHeaderElement";
import "moment/locale/vi";
import moment from "moment";
import * as CONTANT from "constant";
import { movieState$ } from "redux/selectors";
import { useSelector } from "react-redux";

export default function DetailHeader() {
  const [certification, setCertification] = useState("");
  const { detail } = useSelector(movieState$);

  useEffect(() => {
    const getRegionUS = (list) => {
      if (list) {
        const country = list.find((item) => item.iso_3166_1 === "US");
        country && setCertification(country.certification);
      }
    };
    getRegionUS(detail?.releases.countries);
  }, [detail]);

  return (
    <>
      {detail && (
        <Container
          url={`https://image.tmdb.org/t/p/original${detail.backdrop_path}`}
        >
          <Wrapper>
            <DetailMovie>
              <PosterWrapper>
                <Poster
                  src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${detail.poster_path}`}
                />
              </PosterWrapper>

              <Detail>
                <Title>
                  <div className="title">
                    {certification && (
                      <Certification>{certification}</Certification>
                    )}
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

                  <div className="runtime">
                    <span>Thời lượng: </span> {detail.runtime} phút
                  </div>
                </Title>

                <Rating></Rating>

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
