import { useContext } from "react";
import { GlobalStyles } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "context/themeContext";
import { darkTheme, lightTheme } from "styles/theme";
import Header from "components/Header";
import styled from "styled-components";
import SideBar from "components/SideBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import DetailMoviePage from "pages/DetailMoviePage";
import DetailTvPage from "pages/DetailTvPage";
import FilterPage from "pages/FilterPage";

const Container = styled.div`
  &:after {
    content: "";
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    width: 170px;
    height: 170px;
    border-radius: 0 0 0 200px;
    background: ${({ theme }) => theme.roundColor};
    z-index: -1;
  }
`;

const MainInner = styled.div`
  max-width: 1600px;
  width: 100%;
  padding: 60px 0px 0px 225px;
  transition: all 0.1s ease;
  margin: 0 auto;

  #offnav-menu:checked + .mainWrapper & {
    padding: 60px 0px 0px calc(68px + 0px);
  }

  @media (max-width: 1100px) {
    padding: 60px 0px 0px 200px;
  }

  @media (max-width: 800px) {
    padding: 60px 0px 0px;

    #offnav-menu:checked + .mainWrapper & {
      padding: 60px 0px 0px;
    }
  }

  @media (max-width: 640px) {
    padding: 60px 0px 0px;

    #offnav-menu:checked + .mainWrapper & {
      padding: 60px 0px 0px;
    }
  }
  @media (min-width: 1440px) {
    padding-left: 300px;
  }

  @media (min-width: 1920px) {
    padding-left: 340px;
  }
`;

function App() {
  const context = useContext(ThemeContext);
  const { theme } = context;

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <>
          <GlobalStyles />
          <input id="offnav-menu" type="checkbox" hidden />
          <Container className="mainWrapper">
            <Header />
            <MainInner>
              <Switch>
                <Route exact path="/" component={HomePage} />

                <Route
                  exact
                  path="/movie/:movieId"
                  component={DetailMoviePage}
                />

                <Route exact path="/tv/:tvId" component={DetailTvPage} />

                <Route exact path="/movie" component={FilterPage} />
              </Switch>
            </MainInner>
            <SideBar />
          </Container>
        </>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
