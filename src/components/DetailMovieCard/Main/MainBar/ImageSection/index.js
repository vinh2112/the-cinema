import React, { useState } from "react";
import {
  Container,
  Image,
  ListImages,
  Tabs,
  Title,
  Top,
  Wrapper,
} from "./ImageSectionElements";

export default function ImageSection({ images }) {
  const [category, setCategory] = useState("backdrops");
  const $ = document.querySelector.bind(document);

  const handleClick = (e) => {
    const marker = $(".tabs .marker");
    $(".tab-item.active").classList.remove("active");

    if (marker) {
      marker.style.left = e.target.offsetLeft - 1 + "px";
      marker.style.width = e.target.offsetWidth + 2 + "px";
    }
    setCategory(e.target.dataset.type);
    e.target.classList.add("active");
  };

  return (
    <Container>
      <Top>
        <Title>Hình ảnh</Title>
        <Tabs className="tabs">
          <div
            data-type="backdrops"
            className="tab-item active"
            onClick={handleClick}
          >
            Backdrops
          </div>
          <div data-type="posters" className="tab-item" onClick={handleClick}>
            Posters
          </div>
          <div className="marker"></div>
        </Tabs>
      </Top>

      {images[category] && (
        <ListImages>
          <Wrapper>
            {images[category].map((image) => (
              <Image
                key={image.file_path}
                src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                alt={category}
              />
            ))}
          </Wrapper>
        </ListImages>
      )}
    </Container>
  );
}
