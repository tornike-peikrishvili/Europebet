import React from "react";
import styled from "styled-components";
import { Container } from "./header.jsx";

function Prize(props) {
  return (
    <Wrapper>
      <OrangeLine></OrangeLine>
      <PrizeLogo>
        <Icon src={props.PrizeIcon} alt="icon" />
      </PrizeLogo>
      <PrizeText>{props.PrizeText}</PrizeText>
    </Wrapper>
  );
}

export default Prize;

const Wrapper = styled(Container)`
  width: 315px;
  min-height: 63px;
  background-color: #2c3234;
  border-radius: 14px;
  position: relative;
  display: grid;
  grid-template-columns: 2fr 7fr;
  align-items: center;
  margin-top: 10px;

  @media only screen and (min-width: 1024px) {
    width: 95%;
    margin: auto;
    margin-top: 10px;
    background-color: #202324;
    grid-template-columns: 1fr 7fr;
  }
`;
const PrizeLogo = styled.div`
  width: 37px;
  height: 35px;
  background-color: #545758;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  margin: auto;

  @media only screen and (min-width: 1024px) {
    background-color: #232526;
  }
`;
const PrizeText = styled.p`
  color: white;
  font-size: 13px;
  text-align: left;
  max-width: 90%;

  @media only screen and (min-width: 1024px) {
    width: 80%;
  }
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

const Icon = styled.img`
  @media only screen and (min-width: 1024px) {
    background-color: #232526;
  }
`;
