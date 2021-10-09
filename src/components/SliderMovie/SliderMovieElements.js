import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 10px;
`;

export const Title = styled.div`
  display: inline-block;
  font-weight: 700;
  font-size: 30px;
  background: -webkit-linear-gradient(var(--linear-gradient));
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

export const MovieContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

export const MovieWrapper = styled.ul`
  display: flex;
  margin-top: 8px;
  padding: 10px 0 8px;
  width: 100%;
  transition: all 1s ease 0s;
  /* transform: translate3d(calc(-1151px - 10px), 0, 0); */
`;
