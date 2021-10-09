import React from "react";
import styled from "styled-components";
import { useThemeContext } from "context/themeContext";

const Switch = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  position: relative;
  width: ${({ theme }) => theme.switchWidth};
  height: ${({ theme }) => theme.switchHeight};
  border-radius: 50em;
  border: 1px solid ${({ theme }) => theme.subTextColor};
  padding: ${({ theme }) => theme.switchPadding} 0;
  .switch__input,
  .switch__label {
    position: absolute;
    left: 0;
    top: 0;
  }
  .switch__input {
    margin: 0;
    padding: 0;
    opacity: 0;
    height: 0;
    width: 0;
    pointer-events: none;
    &:checked + .switch__label {
      background-color: transparent;
    }
    &:checked + .switch__label + .switch__marker {
      left: calc(
        100% - (${({ theme }) => theme.switchHeight}) +
          (${({ theme }) => theme.switchPadding})
      );
    }
    &:focus + .switch__label,
    &:active + .switch__label {
      box-shadow: 0 0 0 3px alpha(${({ theme }) => theme.primary}, 0.2);
    }
  }
  .switch__label {
    width: 100%;
    height: 100%;
    color: transparent;
    user-select: none;
    background-color: transparent;
    border-radius: inherit;
    z-index: 1;
    transition: background ${({ theme }) => theme.switchAnimationDuration};
  }
  .switch__marker {
    position: relative;
    background-color: ${({ theme }) => theme.subTextColor};
    width: calc(
      (${({ theme }) => theme.switchHeight}) -
        (${({ theme }) => theme.switchPadding}) * 2
    );
    height: calc(
      (${({ theme }) => theme.switchHeight}) -
        (${({ theme }) => theme.switchPadding}) * 2
    );
    border-radius: 50%;
    z-index: 2;
    pointer-events: none;
    left: ${({ theme }) => theme.switchPadding};
    transition: left ${({ theme }) => theme.switchAnimationDuration};
    will-change: left;
  }
`;

const ToggleSwitch = () => {
  const { toggleTheme } = useThemeContext();

  React.useEffect(() => {
    const checkTheme = () => {
      const theme = localStorage.getItem("theme");
      if (theme === "dark") {
        document.getElementById("theme__input").checked = true;
      }
    };
    checkTheme();
  }, []);

  return (
    <>
      <Switch>
        <input
          className="switch__input"
          type="checkbox"
          id="theme__input"
          onClick={toggleTheme}
        />
        <label
          aria-hidden="true"
          className="switch__label"
          htmlFor="theme__input"
        >
          On
        </label>
        <div aria-hidden="true" className="switch__marker"></div>
      </Switch>
    </>
  );
};

export default ToggleSwitch;
