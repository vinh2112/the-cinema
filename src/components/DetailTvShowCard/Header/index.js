import React, { useEffect } from "react";
import {
  Container,
  Detail,
  DetailMovie,
  GenreLink,
  Info,
  LogoCompany,
  Poster,
  PosterWrapper,
  ProducedBy,
  RatingWrapper,
  Title,
  Wrapper,
} from "./DetailHeaderElement";
import "moment/locale/vi";
import moment from "moment";
import { Rating } from "@mui/material";
import * as CONTANT from "constant";
import { tvState$ } from "redux/selectors";
import { useSelector } from "react-redux";

export default function DetailHeader() {
  // const [certification, setCertification] = useState("");
  const { detail } = useSelector(tvState$);

  // useEffect(() => {
  //   const getRegionUS = (list) => {
  //     if (list) {
  //       const arr = list.find((item) => item.iso_3166_1 === "US");

  //       const certi = arr.release_dates.find((item) => {
  //         return item.certification !== "";
  //       });

  //       certi && setCertification(certi.certification);
  //     }
  //   };
  //   getRegionUS(detail?.release_dates?.results);
  // }, [detail]);

  useEffect(() => {
    if (detail) document.title = "The CINEMA | " + detail.name;
  }, [detail]);

  return (
    <>
      {detail && (
        <Container url={`https://image.tmdb.org/t/p/original${detail.backdrop_path}`}>
          <Wrapper>
            <DetailMovie>
              <PosterWrapper>
                <Poster
                  src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${detail.poster_path}`}
                />
              </PosterWrapper>

              <Detail>
                <Title>
                  <div className="title">{detail.name}&nbsp;</div>
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
                    <span>Thời lượng: </span> {detail.episode_run_time} phút
                  </div>
                </Title>

                <Info>
                  <div className="title">Nội dung</div>
                  <div className="over-view">{detail.overview}</div>
                </Info>

                <ProducedBy>
                  {detail.networks
                    .slice(0, 4)
                    .map(
                      (network) =>
                        network.logo_path && (
                          <LogoCompany
                            key={network.id}
                            src={`${CONTANT.URL_IMAGE}${network.logo_path}`}
                            alt={network.name}
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
