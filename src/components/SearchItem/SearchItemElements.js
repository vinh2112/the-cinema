import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  min-height: 44px;
  padding: 4px 10px 4px 15px;
  transition: all 0.1s ease;

  &:hover {
    background-color: ${({ theme }) => theme.hoverColor};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  }
`;

export const SearchType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > .iconify {
    font-size: 16px;
  }
`;

export const SearchContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  padding-left: 14px;

  & > div {
    width: 100%;
  }

  & > .search__original-name {
    font-size: 14px;
    font-weight: 700;
  }

  & > .search__name {
    font-size: 12px;
    font-weight: 500;
  }
`;
