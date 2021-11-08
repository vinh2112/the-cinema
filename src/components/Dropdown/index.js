import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;

  & > .dropdown-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background: #fefefe;
    color: #303030;
    border-radius: 4px;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;

    & > .dropdown-icon {
      display: flex;
      align-items: center;
    }
  }

  & > .dropdown-content {
    position: absolute;
    top: 100%;
  }
`;

export default function Dropdown() {
  return (
    <DropdownContainer>
      <div className="dropdown-btn">
        <div className="dropdown-selected">Choose</div>
        <div className="dropdown-icon">
          <Icon icon="ant-design:caret-down-filled" />
        </div>
      </div>
      <div className="dropdown-content">
        <div className="dropdown-item">React</div>
        <div className="dropdown-item">Javascripts</div>
      </div>
    </DropdownContainer>
  );
}
