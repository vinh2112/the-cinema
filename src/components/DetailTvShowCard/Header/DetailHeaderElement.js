import { Link } from "react-router-dom";
import styled from "styled-components";

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

export const PosterWrapper = styled.div`
  min-width: 300px;
  width: 300px;
  height: 450px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 4px;
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

export const RatingWrapper = styled.div``;

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
  /* grid-template-rows: repeat(2, 1fr); */
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 800px) {
    justify-items: center;
  }
`;

export const LogoCompany = styled.img`
  max-height: 50px;
  width: 100%;
  object-fit: contain;
`;
