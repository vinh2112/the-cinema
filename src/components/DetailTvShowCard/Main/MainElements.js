import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px 25px 25px;

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 0 25px 20px 25px;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    padding: 0 20px 20px;
  }
`;
