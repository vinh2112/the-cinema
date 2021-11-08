import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  flex-shrink: 0;
  border-top: 1px solid #88888855;
  padding-top: 20px;
  padding-bottom: 30px;
  /* height: 300px;
  overflow: hidden; */
`;

export const Title = styled.div`
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
`;

export const ListSeason = styled.div`
  position: relative;
  top: 10px;
  left: 0;
`;

export const SeasonWrapper = styled.div`
  width: 100%;
  min-height: 220px;
  max-height: 500px;
  overflow: hidden;
`;

export const Season = styled.div`
  flex-shrink: 0;
  display: flex;
  width: 100%;
  height: 200px;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);
  background-color: ${({ theme }) => theme.primary};
  overflow: hidden;
`;

export const PosterLink = styled(Link)`
  display: flex;

  & > .poster {
    width: 130px;
    height: 100%;
    object-fit: flex;
  }
`;

export const SeasonContent = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  & > div > .season-name {
    font-size: 20px;
    font-weight: 700;
  }

  & > div > .season-info {
    font-size: 16px;
    font-weight: 700;
  }

  & > div > .season-desc {
    padding-top: 20px;
    font-size: 14px;
    font-weight: 500;
  }
`;
