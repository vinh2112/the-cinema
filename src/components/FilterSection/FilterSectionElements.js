import styled from "styled-components";

export const FilterContainer = styled.div`
  width: 100%;
  max-width: 300px;
  padding-left: 20px;

  @media (max-width: 1000px) {
    order: 1;
    max-width: unset;
    padding: 0 0 20px;
  }
`;

export const FilterWrapper = styled.div`
  position: sticky;
  top: calc(60px + 20px);
  background-color: ${({ theme }) => theme.primary};
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 10%);
`;

export const FilterHeader = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  min-height: 50px;
  padding: 14px 16px;

  & > .title {
    font-size: 16px;
    font-weight: 700;
  }

  & > .drop {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    transition: all 0.1s ease;
  }

  #filter:checked ~ & > .drop {
    transform: rotate(180deg);
  }
`;

export const FilterContent = styled.div`
  display: none;

  #filter:checked ~ & {
    display: block;
  }
`;

export const FilterGenres = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
  padding: 14px 16px;
  border-top: 1px solid ${({ theme }) => theme.borderColor};
`;

export const FilterGenresHeader = styled.div`
  font-size: 14px;
  font-weight: 300;
  width: 100%;
`;

export const GenreItem = styled.label`
  font-size: 12px;
  font-weight: 700;
  height: 30px;
  cursor: pointer;

  & > .genre-label {
    padding: 5px 10px;
    border: 2px solid ${({ theme }) => theme.borderColor};
    border-radius: 16px;
  }

  &:hover > .genre-label {
    background: padding-box ${({ theme }) => theme.hoverColor};
  }

  #genre${({ genreId }) => genreId}:checked ~ .genre-label {
    background: padding-box -webkit-linear-gradient(var(--linear-gradient));
    color: #fefefe;
  }
`;
