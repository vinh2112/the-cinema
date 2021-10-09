import React, { useEffect, useState } from "react";
import {
  CollectionButton,
  CollectionName,
  CollectionParts,
  CollectionWrapper,
  Container,
} from "./CollectionSectionElements";
import { MovieAPI } from "api";

export default function CollectionSection({ collection }) {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    const getPartsCollection = () => {
      if (collection) {
        const res = MovieAPI.getDetailMovieCollection(collection.id);
        if (res.status === 200) {
          setParts(res.data.parts);
        }
      }
    };

    getPartsCollection();
  }, [collection]);
  return (
    <>
      {collection && (
        <Container>
          <CollectionWrapper
            url={
              collection.backdrop_path
                ? `https://www.themoviedb.org/t/p/w1440_and_h320_multi_faces/${collection.backdrop_path}`
                : null
            }
          >
            <CollectionName>Series {collection.name}</CollectionName>
            <CollectionParts>
              {parts.map((part, index) =>
                index === parts.length - 1 ? part.title : part.title + ", "
              )}
            </CollectionParts>
            <CollectionButton>Xem chi tiết</CollectionButton>
          </CollectionWrapper>
        </Container>
      )}
    </>
  );
}
