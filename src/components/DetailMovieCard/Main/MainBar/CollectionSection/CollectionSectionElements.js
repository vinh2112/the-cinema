import styled from "styled-components";
import NoneCollection from "images/NoneCollection.svg";

export const Container = styled.div`
  flex-shrink: 0;
  border-top: 1px solid #88888855;
  padding-top: 20px;
  padding-bottom: 30px;
`;

export const CollectionWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  padding: 0 20px;

  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  background-image: ${({ url }) =>
      url && "linear-gradient(to right,rgba(37, 37, 37, 1) 10%,rgba(37, 37, 37, 0.4) 100%), "}
    url(${({ url }) => (url ? url : NoneCollection)});

  background-color: #ccc;
  background-size: cover;
  background-position: center center;
  color: #fefefe;
`;

export const CollectionName = styled.div`
  width: 100%;
  font-size: 28px;
  font-weight: 700;
`;

export const CollectionButton = styled.div`
  margin-top: 10px;
  text-align: center;
  min-width: 150px;
  padding: 7px 12px;
  border-radius: 18px;
  font-weight: 700;
  font-size: 16px;
  text-transform: capitalize;
  background: -webkit-linear-gradient(var(--linear-gradient));
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const CollectionParts = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 700;
`;
