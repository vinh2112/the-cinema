import styled from "styled-components";

export const ButtonContainer = styled.div`
  cursor: pointer;
  &.btn {
    min-width: 180px;
    text-align: center;
    border: 4px solid transparent;
    background-color: #ff0000;
    color: #fefefe;
    border-radius: 30px;
    padding: 0.5rem 1.8rem;
    font-size: 2rem;
    font-weight: 700;
    box-shadow: 0px 0px 7px 8px #ff00004d;
    transition: box-shadow 0.3s ease;
    position: relative;
  }

  &.btn:hover {
    box-shadow: 0px 0px 7px 15px #ff00004d;
  }

  &.btn-outline {
    border: 3px solid #fefefe;
    background-color: transparent;
    color: #fefefe;
    box-shadow: unset;
    transition: color 0.3s ease, background-color 0.3s ease;
  }

  &.btn-outline:hover {
    box-shadow: unset;
    color: var(--black-color);
    background-color: #fefefe;
  }
`;
