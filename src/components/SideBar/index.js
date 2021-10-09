import { Icon } from "@iconify/react";
import React from "react";
import {
  MainMenu,
  NavMenu,
  WidgetWrapper,
  NavItem,
  ItemLink,
  ItemLabel,
  SubMenu,
  SubMenuItem,
  SubMenuLink,
  FullScreenOverLay,
} from "./SideBarElements";

export default function SideBar() {
  const handleShowSideBar = (e) => {
    if (window.innerWidth >= 800) {
      if (document.getElementById("offnav-menu").checked) {
        e.preventDefault();
        document.getElementById("offnav-menu").checked = false;
        document.getElementById(e.target.dataset.type).checked = true;
      }
    }
  };

  return (
    <MainMenu>
      <WidgetWrapper>
        <NavMenu>
          <NavItem>
            <ItemLink to="/">
              <Icon icon="clarity:home-line" />
              <span className="name">Trang chủ</span>
            </ItemLink>
          </NavItem>

          <NavItem data-type="off-submenu1" onClick={handleShowSideBar}>
            <input id="off-submenu1" type="checkbox" hidden />
            <ItemLabel data-type="off-submenu1" htmlFor="off-submenu1">
              <Icon data-type="off-submenu1" icon="bx:bx-movie" />
              <span data-type="off-submenu1" className="name">
                Phim
              </span>
              <Icon
                data-type="off-submenu1"
                className="drop"
                icon="akar-icons:chevron-down"
              />
            </ItemLabel>

            <SubMenu>
              <SubMenuItem>
                <SubMenuLink to="#">Xem nhiều</SubMenuLink>
              </SubMenuItem>
              <SubMenuItem>
                <SubMenuLink to="#">Top rated</SubMenuLink>
              </SubMenuItem>
            </SubMenu>
          </NavItem>

          <NavItem data-type="off-submenu2" onClick={handleShowSideBar}>
            <input id="off-submenu2" type="checkbox" hidden />
            <ItemLabel data-type="off-submenu2" htmlFor="off-submenu2">
              <Icon data-type="off-submenu2" icon="bx:bx-tv" />
              <span data-type="off-submenu2" className="name">
                Tv Shows
              </span>
              <Icon
                data-type="off-submenu2"
                className="drop"
                icon="akar-icons:chevron-down"
              />
            </ItemLabel>

            <SubMenu>
              <SubMenuItem>
                <SubMenuLink to="#">Xem nhiều</SubMenuLink>
              </SubMenuItem>
              <SubMenuItem>
                <SubMenuLink to="#">Top rated</SubMenuLink>
              </SubMenuItem>
            </SubMenu>
          </NavItem>

          <NavItem className="break">
            <ItemLink to="#">
              <Icon icon="fluent:people-16-regular" />
              <span className="name">Diễn viên</span>
            </ItemLink>
          </NavItem>

          <NavItem>
            <ItemLink to="#">
              <Icon icon="ant-design:user-outlined" />
              <span className="name">About</span>
            </ItemLink>
          </NavItem>

          <NavItem className="break">
            <ItemLink to="#">
              <Icon icon="fluent:mail-48-regular" />
              <span className="name">Contact</span>
            </ItemLink>
          </NavItem>

          <NavItem className="close">
            <ItemLabel htmlFor="offnav-menu">
              <Icon icon="clarity:close-line" />
              <span className="name">Close</span>
            </ItemLabel>
          </NavItem>
        </NavMenu>
        <FullScreenOverLay htmlFor="offnav-menu"></FullScreenOverLay>
      </WidgetWrapper>
    </MainMenu>
  );
}
