import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  flex-shrink: 0;
  padding-bottom: 30px;
`;

export const Title = styled.div`
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
`;

export const ListCasts = styled.div`
  position: relative;
  top: 10px;
  left: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
`;

export const Cast = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  width: 140px;
  border-radius: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 10%);
  background-color: ${({ theme }) => theme.primary};
  margin: 0 4px 10px 10px;
  overflow: hidden;

  &:last-child {
    margin: 0px 10px 10px 10px;
  }
`;

export const PhotoWrapper = styled(Link)`
  display: block;
  height: 175px;
`;

export const Photo = styled.img`
  width: 100%;
  height: 175px;
  object-fit: cover;
`;

export const Info = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
`;

export const OriginalName = styled(Link)`
  font-size: 16px;
  font-weight: 700;
`;

export const Character = styled.div`
  font-size: 14px;
  font-weight: 300;
`;
