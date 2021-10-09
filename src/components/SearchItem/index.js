import React from "react";
import { Container, SearchContent, SearchType } from "./SearchItemElements";
import { Icon } from "@iconify/react";

export default function SearchItem({ type, info }) {
  const getType = (type) => {
    switch (type) {
      case "movie":
        return "bx:bx-camera-movie";
      case "tv":
        return "bx:bx-tv";
      case "person":
        return "bi:person";
      default:
        return "ph:trend-up-light";
    }
  };

  const handleMouseUp = () => {
    document.getElementById("search-input").blur();
  };

  return (
    <Container
      to={`/${info.media_type}/${info.id}`}
      onMouseDown={(e) => e.preventDefault()}
      onMouseUp={handleMouseUp}
    >
      <SearchType>
        <Icon icon={getType(type)} />
      </SearchType>

      <SearchContent>
        <div className="search__original-name">
          {info.original_name || info.original_title}
        </div>
        <div className="search__name">{info.name || info.title}</div>
      </SearchContent>
    </Container>
  );
}
