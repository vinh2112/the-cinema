import styled from "styled-components";

export const Container = styled.div`
  flex-shrink: 0;
  padding-top: 20px;
  border-top: 1px solid #88888855;
  padding-bottom: 30px;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  display: inline-block;
  font-size: 20px;
  font-weight: 700;

  &:after {
    content: "";
    position: relative;
    border-right: 1px solid ${({ theme }) => theme.subTextColor};
    margin: 0 10px;
  }
`;

export const Tabs = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 28px;
  border-radius: 14px;

  & .tab-item {
    font-family: Poppins, sans-serif;
    font-size: 16px;
    font-weight: 400;
    padding: 0 8px;
    user-select: none;
    cursor: pointer;
  }

  & .tab-item.active {
    color: #fefefe;
    transition: all 0.2s ease;
  }

  & .marker {
    position: absolute;
    top: 0;
    left: 0;
    height: 28px;
    width: 102px;
    border-radius: 14px;
    background: -webkit-linear-gradient(var(--linear-gradient));
    transition: all 0.2s ease-out;
    z-index: -1;
  }
`;

export const ListImages = styled.div`
  position: relative;
  top: 10px;
  left: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  overflow-x: auto;
`;

export const Image = styled.img`
  position: relative;
  flex-shrink: 0;
  height: 220px;
  object-fit: cover;
  margin-bottom: 10px;
`;
