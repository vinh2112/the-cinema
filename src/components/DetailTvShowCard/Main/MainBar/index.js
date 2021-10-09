import React from "react";
import { useSelector } from "react-redux";
import { tvState$ } from "redux/selectors";
import CastSection from "./CastSection";
import ImageSection from "./ImageSection";
import { Container } from "./MainBarElements";
import SeasonSection from "./SeasonSection";
import VideoSection from "./VideoSection";

export default function MainBar() {
  const { detail, videos, images } = useSelector(tvState$);

  return (
    <>
      {detail && (
        <Container>
          <CastSection casts={detail.credits.cast} />
          <SeasonSection seasons={detail.seasons} name={detail.name} />
          <VideoSection videos={videos.results} />
          <ImageSection images={images} />
        </Container>
      )}
    </>
  );
}
