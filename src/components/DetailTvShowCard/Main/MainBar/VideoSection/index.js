import React from "react";
import {
  Container,
  ListVideo,
  PlayButton,
  Title,
  TitleVideo,
  Video,
  Wrapper,
} from "./VideoSectionElements";
import { Icon } from "@iconify/react";

export default function VideoSection({ videos }) {
  return (
    <Container>
      <Title>
        <span>Trailer</span>
        <span>{videos.length}</span>
      </Title>
      {videos.length !== 0 && (
        <ListVideo>
          <Wrapper>
            {videos?.map((video) => (
              <Video
                key={video.id}
                url={`https://i.ytimg.com/vi/${video.key}/hqdefault.jpg`}
              >
                <TitleVideo>{video.name}</TitleVideo>
                <PlayButton>
                  <Icon icon="bi:play-fill" />
                </PlayButton>
              </Video>
            ))}
          </Wrapper>
        </ListVideo>
      )}
    </Container>
  );
}
