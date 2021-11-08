import apiConfig from "api/apiConfig";
import Button, { OutlineButton } from "../Button";
import React from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Buttons,
  ContentContainer,
  HeroSlideItemContainer,
  HeroSlider,
  InfoWrapper,
  Overview,
  Poster,
  PosterWrapper,
  Title,
} from "./HeroSlideElements";
import { useHistory } from "react-router";
import tmdbApi from "api/tmdbApi";
import { useDispatch } from "react-redux";
import { showModal } from "redux/actions";

export default function HeroSlide({ trending }) {
  SwiperCore.use([Autoplay]);

  return (
    <HeroSlider>
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 10000 }}
      >
        {trending.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => <HeroSlideItem item={item} active={isActive}></HeroSlideItem>}
          </SwiperSlide>
        ))}
      </Swiper>
    </HeroSlider>
  );
}

const HeroSlideItem = ({ item, active }) => {
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );
  const history = useHistory();
  const dispatch = useDispatch();

  const handleTrailer = async () => {
    const videos = await tmdbApi.getVideos(item.media_type, item.id);
    const trailer = videos.results.find((video) => video.type === "Trailer");
    if (trailer) {
      dispatch(
        showModal(
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
          ></iframe>
        )
      );
    } else {
      // Show toast
    }
  };
  return (
    <HeroSlideItemContainer
      className={`${active ? "active" : ""}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <ContentContainer>
        <InfoWrapper>
          <Title>{item.title || item.name}</Title>
          <Overview>{item.overview}</Overview>
          <Buttons>
            <Button
              content="Xem ngay"
              onClick={() => history.push(`/${item.media_type || "tv"}/` + item.id)}
            />
            <OutlineButton content="Trailer" onClick={handleTrailer} />
          </Buttons>
        </InfoWrapper>
        <PosterWrapper>
          <Poster src={apiConfig.w500Image(item.poster_path)} alt="" />
        </PosterWrapper>
      </ContentContainer>
    </HeroSlideItemContainer>
  );
};
