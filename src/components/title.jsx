import React from "react";
import styled from "styled-components";
import { Title } from "./rulesAndConditions";
import star from "../assets/star.png";

function DetailsTitle(props) {
  return (
    <TitleFrame
      marginTop={props.marginTop}
      borderRadius={props.borderRadius}
      borderRadiusDesktop={props.borderRadiusDesktop}
    >
      <OrangeLine></OrangeLine>
      <MainTitle fontSizeDesktop={props.fontSizeDesktop}>
        {props.titleContent}
      </MainTitle>
      <AdditionalInfo titleInfo={props.titleInfo}>
        {props.titleInfo}
      </AdditionalInfo>
    </TitleFrame>
  );
}

export default DetailsTitle;

const OrangeLine = styled.div`
  width: 125px;
  height: 4px;
  background-color: #ef5a21;
  filter: drop-shadow(0px 0px 10px #ef5a21);
  border-radius: 0px 0px 4px 4px;
  position: absolute;
  top: 0;
`;

const TitleFrame = styled.div`
  width: 100%;
  padding: 20px 0px;
  border-radius: ${(props) => `${props.borderRadius}`};
  background-color: #2c3234;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: ${(props) => `${props.marginTop}`};

  @media only screen and (min-width: 1024px) {
    border-radius: ${(props) => `${props.borderRadiusDesktop}`};
  }
`;
const MainTitle = styled(Title)`
  max-width: 70%;
  text-align: center;
  font-size: 14px;

  @media only screen and (min-width: 1024px) {
    font-size: ${(props) => `${props.fontSizeDesktop}`};
    max-width: 85%;
  }
`;

const AdditionalInfo = styled(MainTitle)`
  font-size: 12px;
  width: 75%;
  margin-top: ${(props) => (props.titleInfo ? "10px" : "0px")};

  @media only screen and (min-width: 1024px) {
    font-size: 15px;
  }
`;
