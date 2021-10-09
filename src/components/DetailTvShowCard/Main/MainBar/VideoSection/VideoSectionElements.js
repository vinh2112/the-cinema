import styled from "styled-components";

export const Container = styled.div`
  flex-shrink: 0;
  width: 100%;
  border-top: 1px solid #88888855;
  padding-top: 20px;
  padding-bottom: 30px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 700;

  & > span:first-child {
    font-size: 20px;
    font-weight: 700;

    &:after {
      content: "";
      position: relative;
      border-right: 1px solid ${({ theme }) => theme.subTextColor};
      margin: 0 10px;
    }
  }

  & > span {
    font-weight: 500;
    font-size: 18px;
  }
`;

export const ListVideo = styled.div`
  position: relative;
  top: 10px;
  left: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
`;

export const Video = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 383.76px;
  height: 216px;
  margin-bottom: 10px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${({ url }) => url});
  cursor: pointer;
`;

export const TitleVideo = styled.div`
  opacity: 0;
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  padding: 10px 10px;
  font-size: 16px;
  font-weight: 600;
  color: #ccc;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease;

  ${Video}:hover & {
    opacity: 1;
    top: 0;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const PlayButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #fefefe;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  transition: all 0.2s ease;

  ${Video}:hover & {
    opacity: 0.8;
  }
`;
