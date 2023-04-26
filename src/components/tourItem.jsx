import React from "react";
import styled from "styled-components";
import { Container } from "./header.jsx";

function TourItem(props) {
  return (
    <Wrapper>
      <TourItemIcon>
        <Icon src={props.itemIcon} alt="icon" />
      </TourItemIcon>
      <TourItemName>{props.itemName}</TourItemName>
    </Wrapper>
  );
}

export default TourItem;

const Wrapper = styled(Container)`
  width: 277px;
  min-height: 56px;
  background-color: #1c1d1e;
  border-radius: 14px;
  position: relative;
  display: grid;
  grid-template-columns: 2fr 7fr;
  align-items: center;
  margin-top: 6px;

  @media only screen and (min-width: 1024px) {
    max-width: 95%;
  }
`;
const TourItemIcon = styled.div`
  width: 37px;
  height: 35px;
  background-color: #545758;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  margin: auto;
`;
const TourItemName = styled.p`
  color: white;
  font-size: 13px;
  text-align: left;
  max-width: 90%;
`;

const Icon = styled.img``;
