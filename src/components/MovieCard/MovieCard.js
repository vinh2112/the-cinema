import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  to {
    filter: blur(0);
  }
`;

const fadeOut = keyframes`
    from {
        transform: scale(1);
        opacity: 0.8;
    }
    to {
        transform: scale(1.6);
        opacity: 0;
    }
`;

export const Container = styled.li`
  flex-shrink: 0;
  position: relative;
  width: calc(20% - 8px);
  overflow: hidden;
  transition: all 0.1s ease;

  &.lg {
    @media (max-width: 1100px) {
      width: calc(25% - 7.5px);
    }

    @media (max-width: 800px) {
      width: calc(33.33% - 6.5px);
    }

    @media (max-width: 640px) {
      width: calc(50% - 5.5px);
    }

    & + & {
      margin-left: 10px;
    }
  }

  &.sm {
    width: calc(25% - 7.5px);

    @media (max-width: 1100px) {
      width: calc(33.33% - 6.666px);
    }

    @media (max-width: 1000px) {
      width: calc(50% - 10px);
      #offnav-menu:checked + .mainWrapper & {
        width: calc(33.33% - 6.666px);
      }
    }

    @media (max-width: 1000px) {
      width: calc(33.33% - 6.666px);

      #offnav-menu:checked + .mainWrapper & {
        width: calc(33.33% - 6.666px);
      }
    }
  }
`;

export const Wrapper = styled(Link)`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 1;
  cursor: pointer;
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(4px);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.2s linear forwards;
`;

export const OverLay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;

  ${Container}:hover & {
    height: 100%;
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
