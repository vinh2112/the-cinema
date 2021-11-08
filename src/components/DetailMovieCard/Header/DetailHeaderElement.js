import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const blurImage = keyframes`
  from {
    filter: blur(4px);
  }
  to {
    filter: blur(0);
  }
`;

export const Container = styled.div`
  width: 100%;
  background: url(${({ url }) => url}) no-repeat;
  background-size: cover;
  background-position: right -200px center;

  @media (max-width: 800px) {
    background-position: center center;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  background-image: ${({ theme }) => theme.detailLinear};
  backdrop-filter: blur(4px);

  @media (max-width: 800px) {
    background-image: ${({ theme }) => theme.detailLinearSmall};
  }
`;

export const DetailMovie = styled.div`
  display: flex;
  padding: 20px 30px 20px 25px;

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 20px 25px 20px 25px;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    padding: 20px;
  }
`;

export const PosterSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
  margin: 10px auto 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  width: 100%;
  padding: 8px 18px;
  border-radius: 4px;
  background: -webkit-linear-gradient(var(--linear-gradient));
  font-size: 20px;
  color: #fefefe;
  cursor: pointer;
  white-space: nowrap;
  user-select: none;
  transition: all 0.2s ease;

  &:hover > .iconify {
    margin-left: 48px;
    transform: rotate(360deg);
    transform-origin: center;
  }

  & > .iconify {
    margin-left: 12px;
    font-size: 26px;
    transition: all 0.6s ease;
    /* opacity: 0;
    visibility: hidden; */
  }

  & > .btn__content {
    font-weight: 500;
    font-family: "Poppins";
  }
`;

export const PosterWrapper = styled.div`
  position: relative;
  min-width: 300px;
  width: 300px;
  height: 450px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 4px;
  animation: ${blurImage} 0.5s ease forwards;
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Detail = styled.div`
  width: 100%;
  padding-left: 30px;
  color: ${({ theme }) => theme.textColor};

  @media (max-width: 800px) {
    padding: 20px 0 0 0;
  }
`;

export const Certification = styled.span`
  display: inline-block;
  padding: 5px 10px;
  background: -webkit-linear-gradient(var(--linear-gradient));
  border-radius: 4px;
  font-size: 20px;
  font-weight: 700;
  color: #fefefe;
  margin-right: 8px;
  white-space: nowrap;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  & .title {
    font-size: 26px;
    font-weight: 700;
  }

  & .released-date {
    font-size: 16px;
    font-weight: 300;
  }

  & .genres {
    display: flex;
    flex-wrap: wrap;
  }

  & .runtime {
    font-size: 16px;
    font-weight: 300;
  }
`;

export const GenreLink = styled(Link)`
  position: relative;
  font-size: 16px;
  font-weight: 600;

  &:not(:last-child):after {
    content: "";
    height: 100%;
    border-right: 1px solid ${({ theme }) => theme.textColor};
    margin: 0 10px;
    opacity: 0.5;
  }
`;

export const RatingWrapper = styled.div`
  & .MuiRating-iconEmpty {
    color: ${({ theme }) => theme.subTextColor};
  }
`;

export const Info = styled.div`
  margin-top: 20px;

  & .title {
    font-size: 24px;
    font-weight: 700;
  }

  & .over-view {
    margin-top: 8px;
    font-size: 14px;
    line-height: 22px;
  }
`;

export const ProducedBy = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 40px;
  margin-top: 20px;

  @media (max-width: 800px) {
    justify-items: center;
  }
`;

export const LogoCompany = styled.img`
  max-height: 50px;
  width: 100%;
  object-fit: contain;
  user-select: none;
`;
