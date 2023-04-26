import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/header";
import RulesAndConditions from "./components/rulesAndConditions";
import SimilarSales from "./components/similarSales";
import FestiveDetails from "./components/festiveDetails";
import Play from "./components/play";
import Banner from "./components/banner";

function App() {
  return (
    <Main>
      <GlobalStyles />
      <Header></Header>
      <Banner></Banner>
      <FestiveDetails></FestiveDetails>
      <RulesAndConditions></RulesAndConditions>
      <SimilarSales></SimilarSales>
      <Play></Play>
    </Main>
  );
}

export default App;

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-width: 1024px) {
    margin: auto;
    max-width: 55%;
    margin-top: 2%;
    overflow-y: scroll;
    background-color: #1c1d1e;
    border-radius: 13px;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
