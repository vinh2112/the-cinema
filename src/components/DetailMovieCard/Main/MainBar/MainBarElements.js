import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 280px);
  padding-top: 20px;

  @media (max-width: 800px) {
    order: 2;
    width: 100%;
  }

  @media (min-width: 1440px) {
    width: calc(100% - 320px);
  }

  @media (min-width: 1600px) {
    width: calc(100% - 340px);
  }

  @media (min-width: 1920px) {
    width: calc(100% - 350px);
  }
`;
