import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const fadeOut = keyframes`
    0% {
      transform: scale(1);
      opacity: 0.8;
    }
    100% {
      transform: scale(1.6);
      opacity: 0;
      box-shadow: inset 0px 0px 10px 0 rgba(255 255 255 / 100%);
    }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 148%;
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.1s ease;
`;

export const Wrapper = styled(Link)`
  position: absolute;
  inset: 0;
  display: flex;
  height: 100%;
  z-index: 1;
  cursor: pointer;
`;

export const Poster = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease 0s;
`;

export const OverLay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 10px;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: all 0.3s ease 0s;

  ${Container}:hover & {
    opacity: 1;
    background: rgba(11, 11, 11, 0.8);
  }
`;

export const MovieName = styled.div`
  & > div {
    font-size: 18px;
    font-weight: 700;
    color: var(--primary-color);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & > div + div {
    font-size: 14px;
    font-weight: 500;
    color: #aaa;
  }

  ${Container}:hover & > div + div {
    overflow: auto;
    white-space: normal;
  }
`;

export const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all 0.1s ease 0.1s;

  ${Container}:hover & {
    opacity: 1;
  }

  ${Container}:hover &:before {
    content: "";
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    background-color: transparent;
    border: 1.5px solid #fefefe;
    animation: ${fadeOut} 2s infinite ease-out forwards;
    box-shadow: inset 0px 0px 10px 0 rgba(255 255 255 / 30%);
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: -webkit-linear-gradient(var(--linear-gradient));
  border-radius: 50%;
  color: #fefefe;
  font-size: 25px;
`;
