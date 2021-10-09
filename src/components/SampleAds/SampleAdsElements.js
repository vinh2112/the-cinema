import styled from "styled-components";

export const AdsContainer = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: calc(60px + 20px);
`;

export const AdsHere = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  min-height: 150px;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  color: #989b9f;
  font-size: 1.2rem;

  &:after {
    content: "";
    position: absolute;
    width: 50px;
    height: 10px;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 0 0 0 8px;
    top: 0;
    right: 0;
  }
`;

export const AdsImg = styled.i`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  font-style: normal;
  background-color: rgba(0, 0, 0, 0.05);
  width: 100%;
  min-height: 90px;
  margin-bottom: 15px;

  &:before {
    content: "Sample ad";
  }
`;

export const AdsContent = styled.i`
  padding: 0;
  width: 60%;
  &:after {
    content: "";
    display: block;
    background-color: rgba(0, 0, 0, 0.05);
    padding-top: 6%;
    width: 70%;
    margin-top: 12px;
  }

  &:before {
    content: "";
    display: block;
    background-color: rgba(0, 0, 0, 0.05);
    padding-top: 6%;
    width: 100%;
  }
`;
