import React from "react";
import { Container } from "./header.jsx";
import { Title } from "./rulesAndConditions";
import styled from "styled-components";
import LeaderboardItem from "./leaderboardItem";

function Leaderboard() {
  const place = ["1", "2", "3", "4", "5", "6"];
  const voucher = ["—", "—", "1 500 ₾", "1 200₾", "1 000₾", "800₾"];
  const prize = [
    "A კატეგორიის საგზური",
    "B კატეგორიის საგზური",
    "სპეც. ტურნირის ბილეთი",
    "სპეც. ტურნირის ბილეთი",
    "სპეც. ტურნირის ბილეთი",
    "სპეც. ტურნირის ბილეთი",
  ];
  const itemElements = place.map((item, index) => (
    <LeaderboardItem
      key={index}
      place={item}
      voucher={voucher[index]}
      prize={prize[index]}
    ></LeaderboardItem>
  ));

  return (
    <Wrapper>
      <ListWrapper>
        <ListTitles>ადგილი</ListTitles>
        <ListTitles>ვაუჩერი</ListTitles>
        <ListTitles marginleftDesktop="15px">პრიზი</ListTitles>
      </ListWrapper>
      {itemElements}
    </Wrapper>
  );
}

export default Leaderboard;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 1024px) {
    width: 90%;
    background-color: #25292b;
    border-radius: 16px;
    padding: 20px 0px 15px 0px;
    margin-top: 15px;
  }
`;

const ListWrapper = styled.div`
  margin: auto;
  width: 313px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20%;
  margin-top: 20px;

  @media only screen and (min-width: 1024px) {
    width: 90%;
    margin: unset;
  }
`;

const ListTitles = styled(Title)`
  color: #7d7d7d;
  font-size: 12px;

  @media only screen and (min-width: 1024px) {
    margin-left: ${(props) => `${props.marginleftDesktop}`};
  }
`;
