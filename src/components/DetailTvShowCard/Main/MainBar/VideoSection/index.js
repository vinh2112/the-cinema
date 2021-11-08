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
import { useDispatch } from "react-redux";
import { showModal } from "redux/actions";

export default function VideoSection({ videos }) {
  const dispatch = useDispatch();
  const handleWatchVideo = (videoKey) => {
    dispatch(
      showModal(
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
        ></iframe>
      )
    );
  };
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
                onClick={() => handleWatchVideo(video.key)}
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
