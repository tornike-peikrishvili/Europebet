import React from "react";
import styled from "styled-components";
import Leaderboard from "./leaderboard";
import { Container } from "./header.jsx";
import Prizes from "./prizes";
import DetailsTitle from "./title";
import AdditionalDetails from "./additionalDetails";
import LeaderboardTitle from "./firstStageLeaderboardTitle";
import LeaderboardResult from "./leaderboardResult";

function FirstStage() {
  return (
    <Container>
      <Wrapper>
        <DetailsTitle
          fontSizeDesktop="18px"
          borderRadiusDesktop="16px 16px 0px 0px"
          borderRadius="16px"
          titleContent="1₾ რეიქი = 1 ქულას"
          titleInfo=""
        ></DetailsTitle>
        <StageContainer>
          <LeaderboardTitle></LeaderboardTitle>
          <Leaderboard></Leaderboard>
          <Prizes></Prizes>
          <LeaderboardTitle></LeaderboardTitle>
          <Leaderboard></Leaderboard>
          <Prizes></Prizes>
          <LeaderboardResult></LeaderboardResult>
        </StageContainer>
      </Wrapper>
      <AdditionalDetails borderRadius="16px"></AdditionalDetails>
    </Container>
  );
}

export const Wrapper = styled(Container)`
  border-radius: 16px;
  margin-top: 30px;
  background-color: #25292b;
`;

export const StageContainer = styled(Container)`
  width: 100%;
  height: auto;
  background-color: #25292b;
  border-radius: 16px;
  padding: 0px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 1024px) {
    background-color: #171718;
    border-bottom: 4px solid #25292b;
    border-left: 4px solid #25292b;
    border-right: 4px solid #25292b;
    border-radius: 0px 0px 16px 16px;
  }
`;

export default FirstStage;
