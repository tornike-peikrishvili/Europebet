import React from "react";
import styled from "styled-components";
import Leaderboard from "./leaderboard";
import TournamentsAndSatelites from "./tournamentsAndSatelites";
import { Container } from "./header.jsx";
import { StageContainer } from "./firstStage";
import { Title } from "./rulesAndConditions";
import Prizes from "./prizes";
import LeaderboardResult from "./leaderboardResult";
import AdditionalDetails from "./additionalDetails";
import DetailsTitle from "./title";
import LeaderboardTitle from "./secondStageLeaderboardTitle";
import star from "../assets/star.png";
import EverydayTournaments from "./everydayTournamets";
import FirstItemBg from "../assets/tournament-bg-m.png";
import ThirdItemBg from "../assets/main-bg-sm.png";
import ThirdItemBgDesktop from "../assets/main-bg.png";
import { Wrapper } from "./firstStage";

function SecondStage() {
  const tournamentItemBg = [FirstItemBg, FirstItemBg, ThirdItemBg];
  const tournamentItemBgDesktop = [
    FirstItemBg,
    FirstItemBg,
    ThirdItemBgDesktop,
  ];
  const tournamentDateBg = ["#B78648", "#B78648", "#D7C860"];
  const tournamentDateColor = ["#fff", "#fff", "#094B3D"];
  const tournamentName = [
    "Holdem Highrollers",
    "Omaha Highrollers",
    "Main Events",
  ];
  const tournamentDate = ["27 აპრილი", "28 აპრილი", "29 აპრილი"];
  const tournamentSum = ["50 000 ₾", "50 000 ₾", "150 000 ₾"];
  const gridAreaDesktop = ["1 / 1 / 2 / 2", "1 / 2 / 2 / 3", "2 / 1 / 3 / 3"];

  const tournamentItem = tournamentItemBg.map((item, index) => (
    <EverydayTournaments
      key={index}
      tournamentItemBg={item}
      tournamentItemBgDesktop={tournamentItemBgDesktop[index]}
      tournamentDateBg={tournamentDateBg[index]}
      tournamentDateColor={tournamentDateColor[index]}
      tournamentDate={tournamentDate[index]}
      tournamentSum={tournamentSum[index]}
      tournamentName={tournamentName[index]}
      gridAreaDesktop={gridAreaDesktop[index]}
      widthDesktop="100%"
    ></EverydayTournaments>
  ));

  return (
    <Container>
      <TournamentsAndSatelites></TournamentsAndSatelites>
      <Wrapper>
        <DetailsTitle
          fontSizeDesktop="18px"
          marginTop="20px"
          borderRadiusDesktop="16px 16px 0px 0px"
          borderRadius="16px"
          titleContent="მოხვდი TOP22 ლიდერბორდში ტურნირებზე დაგროვებული ქულებით"
        ></DetailsTitle>
        <StageContainer>
          <LeaderboardTitle></LeaderboardTitle>
          <Leaderboard></Leaderboard>
          <Prizes></Prizes>
          <LeaderboardResult></LeaderboardResult>
          <AdditionalResultInfo>
            <Star src={star}></Star>სატურნირო ლიდერბორდის ქულების დათვლაში არ
            მონაწილეობს ფრიროლები და სატელიტები
          </AdditionalResultInfo>
        </StageContainer>
      </Wrapper>
      <EverydayTournamentsTitle>
        ყოველდღიური ტურნირები და სატელიტები
      </EverydayTournamentsTitle>
      <TournamentWrapper>{tournamentItem}</TournamentWrapper>
      <RewardInfo>
        <Star src={star}></Star> სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს
        და ფინალურ ეტაპზე, The Lord of the Rings ტურნირზე, იბრძოლებენ The
        Festival in Malta-ს საგზურის მისაღებად.
      </RewardInfo>
      <AdditionalDetails borderRadius="16px"></AdditionalDetails>
    </Container>
  );
}

export default SecondStage;

const TournamentWrapper = styled.div`
  @media only screen and (min-width: 1024px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
`;

export const AdditionalResultInfo = styled.p`
  max-width: 90%;
  color: #fff;
  text-align: center;
  font-size: 13px;
  padding-bottom: 10px;
`;

export const Star = styled.img`
  width: 7px;
`;

const EverydayTournamentsTitle = styled(Title)`
  margin: 20px 0px 20px 0px;
  font-size: 14px;
`;

const RewardInfo = styled.p`
  margin-top: 10px;
  max-width: 90%;
  color: #fff;
  font-size: 14px;

  @media only screen and (min-width: 1024px) {
    text-align: center;
    margin: auto;
    margin-top: 10px;
  }
`;
