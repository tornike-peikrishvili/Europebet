import React from "react";
import DetailsTitle from "./title";
import styled from "styled-components";
import { Container } from "./header";
import ticketIcon from "../assets/poker-item-1-ticket-icon.png";
import ticketsIcon from "../assets/poker-item-2-ticket-icon.png";
import { Wrapper } from "./firstStage";

function WinBeforeTournament() {
  const ticketIcons = [
    ticketIcon,
    ticketIcon,
    ticketIcon,
    ticketsIcon,
    ticketIcon,
  ];
  const tournamentName = [
    "„Holdem Grinders”",
    "“Cashgame Sharks”",
    "„Holdem Grinders”",
    "„The Festival in Malta, GTD“",
    "“Cashgame Sharks”",
  ];

  const ticketType = [
    "C კატეგორიის 1 საგზური",
    "C კატეგორიის 1 საგზური",
    "C კატეგორიის 1 საგზური",
    "B კატეგორიის 1 საგზური",
    "C კატეგორიის 1 საგზური",
  ];
  const requairments = [
    "",
    "",
    "",
    "*ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾ ბაი-ინის გადახდით.",
    "*ტურნირზე მონაწილებას შეძლებენ მხოლოდ ევროპაბეთის ბეჭდის მფლობელები.",
  ];

  const additionalTicket = ["", "", "", "C კატეგორიის 1 საგზური", ""];
  const gridAreaDesktop = [
    "1 / 1 / 3 / 3;",
    "3 / 1 / 5 / 3",
    "5 / 1 / 7 / 3",
    "1 / 3 / 4 / 5",
    "4 / 3 / 7 / 5",
  ];

  const listItem = tournamentName.map((item, index) => (
    <ListItem key={index} gridArea={gridAreaDesktop[index]}>
      <ItemTextWrapper>
        <ItemText fontWeight="bold">{item}</ItemText>
        <ItemText>{ticketType[index]}</ItemText>
        <ItemText>{additionalTicket[index]}</ItemText>
        <ItemText>{requairments[index]}</ItemText>
      </ItemTextWrapper>
      <ItemIcon src={ticketIcons[index]}></ItemIcon>
    </ListItem>
  ));

  return (
    <Container marginTop="30px">
      <Wrapper>
        <DetailsTitle
          borderRadiusDesktop="16px 16px 0px 0px"
          fontSizeDesktop="18px"
          borderRadius="16px"
          titleContent="მოიგე საგზური 30 აპრილის ტურნირებზე"
        ></DetailsTitle>
        <ItemContainer>
          <ListWrapper marginTop="30px;">
            <ItemWrapper>{listItem}</ItemWrapper>
            <MoreInfo>
              * თუ მოთამაშე მოიგებს ბეჭედს ორჯერ ან მეტჯერ, ის The Lord of the
              Rings ტურნირზემოხვდება ბეჭდების შესაბამისი რაოდენობის სტეკით
            </MoreInfo>
            <MoreInfo>
              *ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾-იანი
              ბაი-ინის გადახდით.
            </MoreInfo>
          </ListWrapper>
        </ItemContainer>
      </Wrapper>
    </Container>
  );
}

export default WinBeforeTournament;

const ItemContainer = styled(Container)`
  background-color: #25292b;
  border-radius: 16px;
  @media only screen and (min-width: 1024px) {
  }
`;

const ItemWrapper = styled.div`
  @media only screen and (min-width: 1024px) {
    margin: auto;
    padding-top: 20px;
    width: 90%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
`;

const ListWrapper = styled(Container)`
  background-color: #25292b;
  border-radius: 14px;
  padding-bottom: 15px;
  @media only screen and (min-width: 1024px) {
    margin-top: 0;
    background-color: #171718;
    border-bottom: 4px solid #25292b;
    border-left: 4px solid #25292b;
    border-right: 4px solid #25292b;
    border-radius: 0px 0px 16px 16px;
  }
`;

export const ListItem = styled.div`
  margin: auto;
  margin-top: 15px;
  width: 311px;
  min-height: 80px;
  background-color: #1e2122;
  border-radius: 12px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 1024px) {
    grid-area: ${(props) => `${props.gridArea}`};
    margin-top: 0;
    width: 100%;
    height: 100%;
  }
`;

const ItemTextWrapper = styled.div`
  padding: 10px 0px;
  width: 90%;
`;

const ItemIcon = styled.img`
  position: absolute;
  right: 5%;
  top: 0;
`;

const ItemText = styled.p`
  font-size: 13px;
  color: #fff;
  font-weight: ${(props) => `${props.fontWeight}`};
`;

const MoreInfo = styled(ItemText)`
  width: 90%;
  margin: auto;
  margin-top: 10px;
  text-align: center;
`;
