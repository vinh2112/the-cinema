import React from "react";
import { Cast, Character, Container, Info, ListCasts, OriginalName, Photo, PhotoWrapper, Title, Wrapper } from "./CastSectionElements";
import NoneAvatar from "images/NoneAvatar.svg";

export default function CastSection({ casts }) {
  return (
    <Container>
      <Title>Diễn viên</Title>
      <ListCasts>
        <Wrapper>
          {casts.slice(0, 11).map((cast) => (
            <Cast key={cast.id}>
              <PhotoWrapper to="#">
                <Photo src={cast.profile_path ? `https://image.tmdb.org/t/p/w300/${cast.profile_path}` : NoneAvatar} />
              </PhotoWrapper>
              <Info>
                <OriginalName to="#">{cast.name}</OriginalName>
                <Character>{cast.character}</Character>
              </Info>
            </Cast>
          ))}
        </Wrapper>
      </ListCasts>
    </Container>
  );
}
