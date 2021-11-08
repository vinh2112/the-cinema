import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  margin-bottom: 1rem;
  & .swiper-container {
    overflow: visible;
  }

  & .swiper-slide {
    width: 25%;
    flex-shrink: 0;
    height: auto;
    display: flex;
  }

  @media (max-width: 1100px) {
    & .swiper-slide {
      width: 30%;
    }
  }

  @media (max-width: 640px) {
    & .swiper-slide {
      width: 44%;
    }
  }

  @media (min-width: 1440px) {
    & .swiper-slide {
      width: 20%;
    }
  }

  @media (min-width: 1600px) {
    & .swiper-slide {
      width: 15%;
    }
  }
`;

export const Title = styled.div`
  display: inline-block;
  font-size: 2.4rem;
  font-weight: 700;
  padding: 4rem 0 3rem;
  background: -webkit-linear-gradient(var(--linear-gradient));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Poppins";
`;

export const MoviesWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px 0;
`;
