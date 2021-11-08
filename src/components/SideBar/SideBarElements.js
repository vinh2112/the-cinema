import styled from "styled-components";
import { Link } from "react-router-dom";
export const MainMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 68px;
  height: 100%;
  padding: calc(60px + 15px) 0 0 0;
  transition: all 0.1s ease;
  z-index: 2;
  overflow: hidden;
  box-shadow: 0 6px 18px 0 rgb(30 30 30 / 4%);
  background-color: ${({ theme }) => theme.primary};

  #offnav-menu:checked + .mainWrapper & {
    width: 225px;
  }

  &:hover {
    overflow-y: auto;
  }

  @media (max-width: 800px) {
    width: 100%;
    padding: 0;
    background: transparent;
    box-shadow: none;
    margin-left: -100%;

    #offnav-menu:checked + .mainWrapper & {
      width: 100%;
      margin-left: 0;
      z-index: 51;
    }
  }

  @media (max-width: 1100px) {
    #offnav-menu:checked + .mainWrapper & {
      width: 200px;
    }
  }

  @media (min-width: 1440px) {
    #offnav-menu:checked + .mainWrapper & {
      width: 280px;
    }
  }

  @media (min-width: 1600px) {
    #offnav-menu:checked + .mainWrapper & {
      width: 300px;
    }
  }

  @media (min-width: 1920px) {
    #offnav-menu:checked + .mainWrapper & {
      width: 340px;
    }
  }
`;

export const WidgetWrapper = styled.div`
  padding-bottom: 90px;
`;

export const FullScreenOverLay = styled.label`
  display: block;
  position: fixed;
  inset: 0;
  z-index: 2;
  transition: all 0.1s ease-in;
  background: transparent;
  opacity: 0;
  visibility: hidden;

  @media (max-width: 800px) {
    #offnav-menu:checked + .mainWrapper ${MainMenu} & {
      background: rgba(0, 0, 0, 0.25);
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const NavMenu = styled.ul`
  & .close {
    position: fixed;
    top: 0;
    left: 0;
    padding: 20px 20px 20px 25px;
    width: 85%;
    max-width: 480px;
    background-color: ${({ theme }) => theme.primary};
    margin-left: -100%;
    transition: all 0.1s ease;
  }

  #offnav-menu:not(:checked) + .mainWrapper ${MainMenu} & li > * .name,
  #offnav-menu:not(:checked) + .mainWrapper ${MainMenu} & li > * .drop {
    display: none;
  }

  #offnav-menu:checked + .mainWrapper ${MainMenu} & {
    margin-left: 0;
  }

  #offnav-menu:not(:checked) + .mainWrapper ${MainMenu} & li > * .name,
  #offnav-menu:not(:checked) + .mainWrapper ${MainMenu} & li > * .drop {
    display: block;
  }

  @media (max-width: 800px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 85%;
    max-width: 480px;
    height: 100%;
    margin-left: -100%;
    background-color: ${({ theme }) => theme.primary};
    padding: calc(60px + 15px) 0 90px;
    transition: all 0.1s ease;
    z-index: 3;
    overflow: hidden;
    box-shadow: 0 6px 18px 0 rgba(30 30 30 / 4%);

    #offnav-menu:checked + .mainWrapper ${MainMenu} & .close,
    #offnav-menu:checked + .mainWrapper ${MainMenu} & {
      margin-left: 0;
    }
  }
`;

export const NavItem = styled.li`
  position: relative;
  padding: 10px 20px 10px 25px;

  #offnav-menu:not(:checked) ~ & .name {
    display: none;
  }

  &:hover:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 42px;
    background-color: var(--primary-color);
  }

  &.break:after {
    content: "";
    display: block;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    margin-top: 20px;
  }

  &.close:before {
    top: 9px;
  }

  @media (max-width: 640px) {
    padding-left: 20px;

    &.close {
      padding-left: 20px;
    }
  }
`;

export const ItemLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 2rem;

  & > .iconify {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
  }

  & > .name {
    display: block;
    margin-left: 23px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 700;
    line-height: 20px;
    font-size: 1.26rem;
  }
`;

export const ItemLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 2rem;

  & > .name {
    margin-left: 23px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 700;
    line-height: 20px;
    font-size: 1.26rem;
  }

  & > svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
  }

  & > .drop {
    width: auto;
    height: auto;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.subTextColor};
    margin-left: auto;
    transition: all 0.1s ease;
  }

  #off-submenu1:checked + & .drop,
  #off-submenu2:checked + & .drop {
    transform: rotate(180deg);
  }
`;

export const SubMenu = styled.ul`
  transition: all 0.1s ease;

  #off-submenu1:checked ~ &,
  #off-submenu2:checked ~ & {
    padding-top: 10px;
  }

  #off-submenu1:checked ~ & li,
  #off-submenu2:checked ~ & li {
    height: 38px;
    padding: 10px 0 10px 43px;
    opacity: 1;
    visibility: visible;
  }

  #offnav-menu:not(:checked) + .mainWrapper ${MainMenu} ${NavMenu} & {
    padding: 0;
  }

  #offnav-menu:not(:checked) + .mainWrapper ${MainMenu} ${NavMenu} & li {
    height: 0;
    padding: 0 20px 0 43px;
    opacity: 0;
    visibility: hidden;
  }

  @media (max-width: 800px) {
    #offnav-menu:not(:checked) + .mainWrapper ${MainMenu} ${NavMenu} #off-submenu1:checked ~ & li,
    #offnav-menu:not(:checked) + .mainWrapper ${MainMenu} ${NavMenu} #off-submenu2:checked ~ & li {
      height: 38px;
      padding: 10px 20px 10px 43px;
      opacity: 1;
      visibility: visible;
    }

    #offnav-menu:not(:checked) + .mainWrapper ${MainMenu} ${NavMenu} #off-submenu1:checked ~ &,
    #offnav-menu:not(:checked) + .mainWrapper ${MainMenu} ${NavMenu} #off-submenu2:checked ~ & {
      padding: 10px 0 0;
    }
  }
`;

export const SubMenuItem = styled.li`
  height: 0px;
  padding: 0 0 0 43px;
  opacity: 0;
  visibility: hidden;
  transition: inherit;
`;

export const SubMenuLink = styled(Link)`
  display: block;
  font-size: 1.2rem;
  font-weight: 600;
`;
