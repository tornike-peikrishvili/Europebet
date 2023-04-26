import React from "react";
import styled from "styled-components";
import star from "../assets/star.png";
import { Container } from "./header";
function LeaderboardResult() {
  return (
    <ResultContainer>
      <Result>
        <Star src={star}></Star>ლიდერბორდის შედეგები განახლდება
      </Result>
      <ResultLink href="">პოკერის ლობიში</ResultLink>
    </ResultContainer>
  );
}

export default LeaderboardResult;

const ResultContainer = styled(Container)`
  max-width: 90%;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 10px;
  text-align: center;
  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    padding-bottom: 15px;
    padding-top: 15px;
  }
`;

const Result = styled.p`
  color: white;
  font-size: 13px;
`;
const ResultLink = styled.a`
  color: #ef5a21;
  font-size: 13px;
  @media only screen and (min-width: 1024px) {
    margin-left: 5px;
  }
`;

const Star = styled.img`
  width: 7px;
`;
