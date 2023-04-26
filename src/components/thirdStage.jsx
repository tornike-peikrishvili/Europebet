import React from "react";
import styled from "styled-components";
import Tour from "./tour";
import { Container } from "./header.jsx";
import { StageContainer } from "./firstStage";
import DetailsTitle from "./title";
import WinBeforeTournament from "./winBeforeTournament";
import tourImg from "../assets/final-info-img.jpg";
import MysticalKey from "./mysticalKey";

function ThirdSage() {
  const tourList = [0, 1, 2].map((index) => (
    <TourListWrapper>
      <TourTitle
        key={index}
        titleContent="A კატეგორიის საგზურში შედის"
        borderRadius="14px 14px 0px 0px"
      ></TourTitle>
      <Tour></Tour>
    </TourListWrapper>
  ));
  return (
    <Container>
      <ThirdStageContainer>
        <TourImg src={tourImg}></TourImg>
        <TourTextWrapper>
          <TourText fontSize="13px">
            გაემგზავრე The Festival in Malta-ზე!
          </TourText>
          <TourText fontSize="14px">
            The Festival Series ტურნირების ფარგლებში, ევროპაბეთი უკვე მეორედ
            აძლევს პოკერის მოთამაშეებს დაუვიწყარი მოგზაურობის შანსს.
          </TourText>
        </TourTextWrapper>
        <TourDurationWrapper>
          <OrangeLine></OrangeLine>
          <TourDurationText>
            15-დან 21 მაისის ჩათვლით მალტა პოკერის ფესტივალს უმასპინძლებს
          </TourDurationText>
        </TourDurationWrapper>
        <TourWrapper>{tourList}</TourWrapper>
      </ThirdStageContainer>
      <WinBeforeTournament></WinBeforeTournament>
      <MysticalKey></MysticalKey>
    </Container>
  );
}

export default ThirdSage;

const TourTitle = styled(DetailsTitle)`
  @media only screen and (min-width: 1024px) {
    font-size: 14px;
  }
`;

const TourTextWrapper = styled.div``;

const TourWrapper = styled.div`
  @media only screen and (min-width: 1024px) {
    width: 98%;
    display: flex;
  }
`;

const TourDurationWrapper = styled(Container)`
  width: 301px;
  height: 62px;
  background-color: #2c3234;
  border-radius: 8px;
  position: relative;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 1024px) {
    width: 75%;
  }
`;

const TourDurationText = styled.p`
  color: white;
  font-size: 14px;
  text-align: center;
  max-width: 90%;
  font-weight: bold;
`;

const OrangeLine = styled.div`
  position: absolute;
  left: 0;
  background-color: #ef5a21;
  width: 4px;
  height: 28px;
  border-radius: 0px 4px 4px 0px;
  filter: drop-shadow(0px 0px 10px #ef5a21);
`;

const TourText = styled.p`
  color: #fff;
  margin: auto;
  margin-top: 10px;
  text-align: center;
  width: 80%;
  font-size: ${(props) => `${props.fontSize}`};

  @media only screen and (min-width: 1024px) {
    font-size: 14px;
  }
`;

const TourListWrapper = styled.div`
  width: 301px;
  margin: auto;
  margin-top: 30px;
  background-color: #25292b;
  border-radius: 14px;

  @media only screen and (min-width: 1024px) {
    max-width: 31%;
    font-size: 14px;
  }
`;

const TourImg = styled.img`
  margin-top: 15px;
  width: 301px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;

  @media only screen and (min-width: 1024px) {
    width: 90%;
  }
`;

const ThirdStageContainer = styled(StageContainer)`
  background-color: #171718;
  border: 4px solid #25292b;
  margin-top: 25px;
  padding-bottom: 15px;

  @media only screen and (min-width: 1024px) {
    border-radius: 16px;
  }
`;
