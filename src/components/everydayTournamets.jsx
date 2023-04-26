import React from "react";
import styled from "styled-components";
import { Container } from "./header";

function EverydayTournaments(props) {
  return (
    <ExtendedContainer marginTop="15px" gridArea={props.gridAreaDesktop}>
      <EverydayTournamentItem
        widthsDesktop={props.widthDesktop}
        ItemBgDesktop={props.tournamentItemBgDesktop}
        ItemBg={props.tournamentItemBg}
      >
        <Wrapper>
          <ColumnContainer>
            <TournamentName>{props.tournamentName}</TournamentName>
            <TournamentPrize>{props.tournamentSum}</TournamentPrize>
          </ColumnContainer>
          <ColumnContainer>
            <TournamentPrice>ბაი-ინი - 550₾</TournamentPrice>
            <TournamentDate
              backgroundBg={props.tournamentDateBg}
              backgroundColor={props.tournamentDateColor}
            >
              {props.tournamentDate}
            </TournamentDate>
          </ColumnContainer>
        </Wrapper>
      </EverydayTournamentItem>
    </ExtendedContainer>
  );
}

export default EverydayTournaments;

const ExtendedContainer = styled(Container)`
  width: 100%;
  @media only screen and (min-width: 1024px) {
    grid-area: ${(props) => `${props.gridArea}`};
    margin-top: 0;
  }
`;

const EverydayTournamentItem = styled.div`
  width: 348px;
  height: 85px;
  background-image: url(${(props) => props.ItemBg});
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  display: Flex;
  align-items: center;

  @media only screen and (min-width: 1024px) {
    background-image: url(${(props) => props.ItemBgDesktop});
    border-radius: 16px;
    width: ${(props) => `${props.widthsDesktop}`};
  }
`;

const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: Flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 10px;
`;

const ColumnContainer = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const TournamentName = styled.p`
  color: #fff;
  font-size: 14px;
`;
const TournamentPrize = styled.p`
  color: #ffbe00;
  font-size: 24px;
`;
const TournamentPrice = styled.p`
  color: #fff;
  font-size: 12px;
`;
const TournamentDate = styled.p`
  background-color: ${(props) => `${props.backgroundBg}`};
  color: ${(props) => `${props.backgroundColor}`};
  font-size: 14px;
  padding: 5px 15px;
  border-radius: 15px 15px 0px 15px;
`;
