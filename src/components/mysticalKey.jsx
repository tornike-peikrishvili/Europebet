import React from "react";
import DetailsTitle from "./title";
import styled from "styled-components";
import { Container } from "./header";
import { ListItem } from "./winBeforeTournament";
import { Wrapper } from "./firstStage";

function MysticalKey() {
  const itemCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const listItem = itemCount.map((item, index) => (
    <ExtendendListItem key={index}>
      <Place>{item}</Place>
      <ItemText>სპეციალური ტურნირი Cashgame Sharks II ადგილი</ItemText>
    </ExtendendListItem>
  ));
  return (
    <Container>
      <Wrapper>
        <DetailsTitle
          fontSizeDesktop="18px"
          borderRadiusDesktop="16px 16px 0px 0px"
          borderRadius="16px"
          titleContent="მიტიკური გასაღები"
        ></DetailsTitle>
        <ListContainer>
          <ListText>
            მოთამაშეები გარკვეული საპრიზო ადგილების დაკავების შემთხვევაში
            მიიღებენ საიდუმლო გასაღებს
          </ListText>
          <ListWrapper marginTop="30px;">
            <ItemContainer>{listItem}</ItemContainer>
          </ListWrapper>
        </ListContainer>
      </Wrapper>
    </Container>
  );
}

export default MysticalKey;

const ListText = styled.p`
  display: none;
  @media only screen and (min-width: 1024px) {
    display: block;
    font-size: 14px;
    color: #fff;
    text-align: center;
    max-width: 90%;
    margin: auto;
    padding-bottom: 15px;
  }
`;

const ListContainer = styled(Container)`
  @media only screen and (min-width: 1024px) {
    width: 100%;
    background-color: #171718;
    border-bottom: 4px solid #25292b;
    border-left: 4px solid #25292b;
    border-right: 4px solid #25292b;
    border-radius: 0px 0px 16px 16px;
    padding-bottom: 20px;
    padding-top: 20px;
  }
`;

const ListWrapper = styled(Container)`
  background-color: #25292b;
  border-radius: 14px;
  padding-bottom: 15px;
  @media only screen and (min-width: 1024px) {
    width: 90%;
    padding-top: 5px;
    padding-bottom: 20px;
    margin-top: 0px;
  }
`;

const ItemContainer = styled.div`
  margin: auto;
  margin-top: 10px;
  width: 313px;
  height: 365px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 4px;
    border-radius: 2px;
  }

  ::-webkit-scrollbar-track {
    background: #2c3234;
    margin-left: 105px !important;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #f05a22;
    border-radius: 4px;
    margin-left: 105px !important;
  }

  @media only screen and (min-width: 1024px) {
    width: 95%;
    height: 400px;
    background-color: #25292b;
    border-radius: 16px;
  }
`;

const ExtendendListItem = styled(ListItem)`
  margin: unset;
  margin-top: 5px;
  border-radius: 76px;
  border: 2px solid #2c3234;
  width: 295px;
  min-height: 56px;
  color: #fff;
  position: relative;
  @media only screen and (min-width: 1024px) {
    margin: auto;
    max-height: 56px;
    width: 95%;
    margin-top: 10px;
  }
`;
const Place = styled.p`
  font-size: 12px;
  padding: 5px 12px;
  background-color: #2c3234;
  filter: drop-shadow(0px 0px 5px #2c3234);
  border-radius: 100%;
  text-align: center;
  position: absolute;
  left: 5%;
`;
const ItemText = styled.p`
  font-size: 12px;
  width: 80%;
  position: absolute;
  left: 19%;
`;
