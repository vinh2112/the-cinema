import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  to{
    left: 10px
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0 0 0 / 75%);
  z-index: 10000;
`;

export const ModalCloseButton = styled.div`
  position: absolute;
  left: -100%;
  top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  animation: ${slideIn} 0.5s ease forwards;
`;

export const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 25px;
  color: ${({ theme }) => theme.textColor};
  background: ${({ theme }) => theme.primary};
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease;

  &:active {
    transform: scale(0.9);
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1280px;
  max-height: 720px;
  width: 80vw;
  height: calc(80vw / 1.778);

  @media (max-width: 640px) {
    width: 90vw;
    height: calc(90vw / 1.778);
  }
`;
