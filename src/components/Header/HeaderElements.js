import { Link } from "react-router-dom";
import styled from "styled-components";
import Loading from "images/Loading.svg";

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 60px;
  padding: 0 30px 0 25px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.textColor};
  z-index: 50;
  transition: all 0.1s ease;

  @media (max-width: 800px) {
    padding: 0 25px;
    box-shadow: 0 2px 10px 0 rgb(0 0 0 / 7%);
  }

  @media (max-width: 640px) {
    padding: 0 20px;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 200px;

  @media (max-width: 1100px) {
    width: 175px;
  }

  @media (min-width: 1440px) {
    width: 255px;
  }

  @media (min-width: 1600px) {
    width: 275px;
  }

  @media (min-width: 1920px) {
    width: 315px;
  }
`;

export const NavIcon = styled.div`
  position: relative;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  height: 100%;
  z-index: 4;

  & > * {
    width: 20px;
    margin: auto 0;
    cursor: pointer;
  }
`;

export const Nav = styled.label`
  position: relative;
  height: 20px;
  padding: 3px 0;

  &:before {
    content: "";
    width: 45px;
    height: 45px;
    display: block;
    background-color: ${({ theme }) => theme.hoverColor};
    top: -13px;
    left: -12.5px;
    border-radius: 50%;
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transition: all 0.1s ease;
    transform: scale(0.75, 0.75);
  }

  &:hover:before {
    opacity: 1;
    visibility: visible;
    transform: scale(1, 1);
  }

  & > i {
    display: block;
    position: relative;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.iconColor};
    margin: 0 0 5px 0;
  }

  & > i:nth-child(2) {
    width: 60%;
    margin: 0;
  }

  & > i:nth-child(3) {
    width: 80%;
    margin: 5px 0 0 0;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 0 0 23px;
  overflow: hidden;
`;

export const Logo = styled(Link)`
  & > span {
    font-family: Poppins, sans-serif;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 24px;
    font-weight: 700;
    background: -webkit-linear-gradient(var(--linear-gradient));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  flex-grow: 1;
  padding-left: 25px;

  @media (min-width: 1440px) {
    padding-left: 30px;
  }

  @media (min-width: 1600px) {
    padding-left: 50px;
  }

  @media (min-width: 1920px) {
    padding-left: 60px;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
  max-width: 550px;
`;

export const SearchForm = styled.div`
  position: relative;
  width: 100%;
  margin: auto 0;
`;

export const SearchResults = styled.div`
  position: absolute;
  display: none;
  top: calc(100% + 4px);
  left: 0px;
  right: 0;
  min-height: 70px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  box-shadow: 0 4px 8px rgb(225 225 225 / 10%);
  overflow: hidden;
`;

export const LoadingSection = styled.div`
  height: 70px;
  background: url(${Loading}) no-repeat center center;
  background-size: 60px;
`;

export const SearchInput = styled.input`
  background-color: ${({ theme }) => theme.searchInput};
  padding: 12px 20px 12px 45px;
  border-radius: 5px;
  width: 100%;
  font-family: "Nunito Sans", sans-serif;

  &:focus ~ ${SearchResults} {
    display: block;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 0;
  left: 15px;
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 1.8rem;
  cursor: pointer;
  filter: brightness(0.5);
  transition: all 0.3s ease;

  ${SearchInput}:focus ~ & {
    color: var(--primary-color);
    filter: brightness(1);
  }
`;

export const SearchClose = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  height: 100%;
  flex-shrink: 0;
  top: 0;
  right: 10px;
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;
  filter: brightness(0.5);

  ${SearchInput}:focus:valid ~ & {
    opacity: 1;
    visibility: visible;
  }
`;

export const RightSide = styled.div`
  margin-left: auto;
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const DarkLabel = styled.label`
  user-select: none;
  padding: 5px 8px 5px 0;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.subTextColor};
  font-family: "Poppins";
`;
