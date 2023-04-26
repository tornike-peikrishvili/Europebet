import React from "react";
import styled from "styled-components";
import { Container } from "./header.jsx";

function LeaderboardItem(props) {
  return (
    <Item>
      <InfoContainer>
        <Circle>
          <ItemInfo>{props.place}</ItemInfo>
        </Circle>
        <ItemInfo marginleftDesktop="50px">{props.voucher}</ItemInfo>
        <ItemInfo width="74px">{props.prize}</ItemInfo>
      </InfoContainer>
    </Item>
  );
}

export default LeaderboardItem;

export const Item = styled.div`
  width: 313px;
  height: 45px;
  background-color: #1e2122;
  border-radius: 76px;
  border: solid 1px #2c3234;
  margin: auto;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 1024px) {
    width: 95%;
  }
`;
const ItemInfo = styled.p`
  color: white;
  font-size: 10px;
  width: ${(props) => `${props.width}`};
  text-align: center;

  @media only screen and (min-width: 1024px) {
    width: unset;
    margin-left: ${(props) => `${props.marginleftDesktop}`};
    font-size: 13px;
  }
`;

const InfoContainer = styled(Container)`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15%;
  align-items: center;

  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Circle = styled.div`
  width: 22px;
  height: 22px;
  background-color: #2c3234;
  filter: drop-shadow(0px 0px 5px #2c3234);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
