import React, { useState } from "react";
import styled from "styled-components";
import FirstStage from "./firstStage";
import SecondStage from "./secondStage";
import ThirdStage from "./thirdStage";
import { Container } from "./header.jsx";

function FestiveDetails() {
  const Date = ["28 ოქტ. - 7 ნოემ.", "10 - 29 დეკ.", "28 ოქტ. - 7 ნოემ."];
  const Name = ["Cash Games", "New Year Series", "Final Stage"];
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (e) => {
    setActiveButton(e);
  };

  const btns = [0, 1, 2].map((index) => (
    <Button
      key={index}
      onClick={() => handleButtonClick(index)}
      active={activeButton === index}
    >
      <BtnInfo
        fontSizeDesktop={activeButton === index ? "14px" : "10px"}
        fontSize={activeButton === index ? "11px" : "10px"}
      >
        {Date[index]}
      </BtnInfo>
      <BtnInfo
        fontWeight="bold"
        fontSizeDesktop={activeButton === index ? "18px" : "14px"}
        fontSize={activeButton === index ? "14px" : "12px"}
      >
        {Name[index]}
      </BtnInfo>
    </Button>
  ));

  const body = [FirstStage, SecondStage, ThirdStage].map((Detail, index) => (
    <Container key={index} active={activeButton === index}>
      {activeButton === index && <Detail />}
    </Container>
  ));
  return (
    <Container width="90%">
      <DetailsText>
        <FirstRow>
          <GameName>სლოტები</GameName>
          <GameDate>10 სექტემბერი - 7 ნოემბერი</GameDate>
        </FirstRow>
        <SecondRow>მოიპოვე 10 საგზურიდან ერთ-ერთი</SecondRow>
        <ThirdRow>მოხვდი პოკერის ფესტივალზე მალტაში</ThirdRow>
      </DetailsText>
      <ButtonContainer>{btns}</ButtonContainer>
      {body}
    </Container>
  );
}

export default FestiveDetails;

const DetailsText = styled.div`
  width: 343px;
  color: white;
  padding-bottom: 25px;
  padding-top: 10px;
`;

const FirstRow = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (min-width: 1024px) {
    width: 280px;
    height: 35px;
    background-color: #25292b;
    border-radius: 35px;
    position: absolute;
    left: 23.5%;
    top: 5%;
    justify-content: space-evenly;
  }
`;
const SecondRow = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin-top: 12px;
`;
const ThirdRow = styled(SecondRow)`
  font-weight: lighter;
  font-size: 14px;
`;
const GameName = styled.p`
  background-color: #25292b;
  padding: 7px;
  border-radius: 15px;
  font-size: 12px;

  @media only screen and (min-width: 1024px) {
    font-size: 13px;
    background-color: gray;
    padding: 4px 8px;
  }
`;
const GameDate = styled.p`
  margin-left: 10px;
  font-size: 14px;

  @media only screen and (min-width: 1024px) {
    font-size: 15px;
    margin-left: unset;
  }
`;

const ButtonContainer = styled(Container)`
  height: 77px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  background-color: #2c3234;
  border-radius: 8px;
`;

const Button = styled.button`
  background-color: ${({ active }) => (active ? "#EF5A21" : "#2C3234")};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.25s;
  width: ${({ active }) => (active ? "130px" : "102px")};
  height: ${({ active }) => (active ? "90px" : "77px")};

  @media only screen and (min-width: 1024px) {
    width: ${({ active }) => (active ? "270px" : "280px")};
  }
`;

const BtnInfo = styled.p`
  font-weight: ${(props) => `${props.fontWeight}`};
  font-size: ${(props) => `${props.fontSize}`};
  white-space: nowrap;

  @media only screen and (min-width: 1024px) {
    font-size: ${(props) => `${props.fontSizeDesktop}`};
  }
`;
