import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.div`
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
  background: -webkit-linear-gradient(var(--linear-gradient));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const MoviesWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px 0;
`;
