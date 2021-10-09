import React from "react";
import MainBar from "./MainBar";
import { MainContainer } from "./MainElements";
import SideBar from "./SideBar";

export default function DetailMain() {
  return (
    <MainContainer>
      <MainBar />
      <SideBar />
    </MainContainer>
  );
}
