import React from "react";
import { useSelector } from "react-redux";
import { movieState$ } from "redux/selectors";
import CastSection from "./CastSection";
import CollectionSection from "./CollectionSection";
import ImageSection from "./ImageSection";
import { Container } from "./MainBarElements";
import VideoSection from "./VideoSection";

export default function MainBar() {
  const { detail, videos, images } = useSelector(movieState$);

  return (
    <>
      {detail && (
        <Container>
          <CastSection casts={detail.credits.cast} />
          <VideoSection videos={videos.results} />
          <ImageSection images={images} />
          <CollectionSection collection={detail.belongs_to_collection} />
        </Container>
      )}
    </>
  );
}
