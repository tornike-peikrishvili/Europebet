import React from "react";
import styled from "styled-components";
import arrow from "../assets/arrow-down.png";
import { Container } from "./header.jsx";

function RulesAndConditions() {
  const items = [
    "როდის იწყება და რა ფორმატით გაიმართება აქცია",
    "როგორ მივიღო აქციაში მონაწილეობა?",
    "სხვადასხვა",
  ];

  const itemElements = items.map((item, index) => (
    <Item key={index}>
      <Wrapper>
        {item}
        <img src={arrow} alt="arrow" />
      </Wrapper>
    </Item>
  ));

  return (
    <ExtendedContainer marginTop="50px">
      <Title>წესები და პირობები</Title>
      <List>{itemElements}</List>
    </ExtendedContainer>
  );
}

export default RulesAndConditions;

const ExtendedContainer = styled(Container)`
  @media only screen and (min-width: 1024px) {
    width: 90%;
  }
`;

const List = styled.ul`
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 14px;
  padding-right: 14px;
`;

const Item = styled.li`
  width: 343px;
  height: 50px;
  background-color: #25292b;
  color: white;
  display: flex;
  align-items: center;
  border-radius: 8px;
  font-size: 14px;
  color: #bbbbbb;

  @media only screen and (min-width: 1024px) {
    width: 100%;
    font-size: 15px;
  }
`;
export const Title = styled.h2`
  color: #ffffff;
  font-size: 16px;
`;
