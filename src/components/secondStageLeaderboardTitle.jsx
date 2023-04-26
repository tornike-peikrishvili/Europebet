import React from "react";
import styled from "styled-components";
import arrow from "../assets/arrow-down.png";

function LeaderboardTitle() {
  return (
    <TitleContainer>
      <Title>ქულების დაგროვების მექანიკა</Title>
      <ArrowBtn>
        <img src={arrow} alt="arrow" />
      </ArrowBtn>
    </TitleContainer>
  );
}

export default LeaderboardTitle;

const TitleContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media only screen and (min-width: 1024px) {
    margin-top: 15px;
  }
`;

const Title = styled.p`
  padding: 10px 50px 10px 20px;
  background-color: #1e2122;
  border: solid 2px #2c3234;
  border-radius: 76px;
  font-size: 12px;
  color: #fff;
`;

const ArrowBtn = styled.button`
  width: 38px;
  height: 38px;
  background-color: #f05a22;
  border: 1px solid #fff;
  border-radius: 100%;
  position: absolute;
  right: -3%;
`;
