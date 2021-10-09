import React, { useRef, useState } from "react";
import {
  Container,
  HeaderLeft,
  NavIcon,
  Nav,
  LogoWrapper,
  Logo,
  HeaderRight,
  SearchBar,
  SearchForm,
  SearchInput,
  SearchButton,
  SearchClose,
  SearchResults,
  RightSide,
  DarkLabel,
  LoadingSection,
} from "./HeaderElements";
import { Icon } from "@iconify/react";
import ToggleSwitch from "./ToggleSwitch";
import * as actions from "redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { searchState$ } from "redux/selectors";
import SearchItem from "components/SearchItem";

export default function Header() {
  const [value, setValue] = useState("");
  const { data, trending, isLoading } = useSelector(searchState$);
  const dispatch = useDispatch();
  const typingTimeoutRef = useRef(null);

  const handleSearch = (e) => {
    setValue(e.target.value);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      dispatch(actions.search.searchRequest(e.target.value));
    }, 300);
  };

  const handleCloseSearch = () => {
    setValue("");
  };

  const handleSearchTrending = () => {
    if (!trending) {
      dispatch(actions.searchTrending.searchTrendingRequest());
    }
  };

  const handleSearchKeyDown = (e) => {
    if (e.keyCode === 27) {
      e.target.blur();
    }
  };

  return (
    <Container>
      <HeaderLeft>
        <NavIcon>
          <Nav htmlFor="offnav-menu">
            <i></i>
            <i></i>
            <i></i>
          </Nav>
        </NavIcon>

        <LogoWrapper>
          <Logo to="/">
            <span>The CINEMA</span>
          </Logo>
        </LogoWrapper>
      </HeaderLeft>

      <HeaderRight>
        <SearchBar>
          <SearchForm>
            <SearchInput
              id="search-input"
              type="text"
              value={value}
              autocomplete="off"
              placeholder="Tìm kiếm"
              onChange={handleSearch}
              onFocus={handleSearchTrending}
              onKeyDown={handleSearchKeyDown}
              required
            />
            <SearchButton>
              <Icon icon="bytesize:search" />
            </SearchButton>

            <SearchClose onClick={handleCloseSearch}>
              <Icon icon="eva:close-outline" />
            </SearchClose>

            <SearchResults>
              {isLoading && <LoadingSection />}
              {trending &&
                !value &&
                trending.slice(0, 10).map((item) => {
                  return (
                    <SearchItem key={item.id} type="trending" info={item} />
                  );
                })}
              {data &&
                value &&
                data.slice(0, 10).map((item) => {
                  return (
                    <SearchItem
                      key={item.id}
                      type={item.media_type}
                      info={item}
                    />
                  );
                })}
            </SearchResults>
          </SearchForm>
        </SearchBar>

        <RightSide>
          <DarkLabel htmlFor="theme__input">Theater mode</DarkLabel>
          <ToggleSwitch />
        </RightSide>
      </HeaderRight>
    </Container>
  );
}
