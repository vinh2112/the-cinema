import styled, { css } from "styled-components";

export const HeroSlider = styled.div`
  margin-bottom: 10px;
`;

export const HeroSlideItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9rem 0;
  width: 100%;
  height: calc(100vh - 60px);
  max-height: 700px;
  position: relative;
  background-position: center 0;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fefefe;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top,
      ${({ theme }) => theme.secondary} 20px,
      rgba(0 0 0 / 20%) 100%
    );
  }

  @media (max-width: 1024px) {
    padding: 6rem 0;
  }

  @media (max-width: 800px) {
    padding: 0;
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  max-width: 1600px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 3rem;
`;

export const InfoWrapper = styled.div`
  width: 55%;
  padding: 0 3rem;
  position: relative;

  & > * ~ * {
    margin-top: 3rem;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const activeCss = css`
  opacity: 0;
  transform: translateY(50px);
  ${HeroSlideItemContainer}.active & {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  line-height: 1;
  opacity: 0;
  transform: translateX(-100%);
  transition: all 0.5s ease;
  ${HeroSlideItemContainer}.active & {
    opacity: 1;
    transform: translateX(0);
    transition-delay: 0.3s, 0.3s;
  }
`;

export const Overview = styled.div`
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.2rem;
  opacity: 0;
  transform: translateX(-100%);
  transition: all 0.5s ease;
  ${HeroSlideItemContainer}.active & {
    opacity: 1;
    transform: translateX(0);
    transition-delay: 0.4s, 0.4s;
  }

  @media (max-width: 800px) {
    max-height: 22rem;
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 20px;
  transition: all 0.5s ease-out;

  ${activeCss}
  ${HeroSlideItemContainer}.active & {
    transition-delay: 0.7s, 0.7s;
  }
`;

export const PosterWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Poster = styled.img`
  width: calc(100vw / 4);
  max-width: 400px;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transform: scale(0);
  opacity: 0;
  transition: all 0.7s ease;

  ${HeroSlideItemContainer}.active & {
    transform: scale(1);
    opacity: 1;
  }
`;
