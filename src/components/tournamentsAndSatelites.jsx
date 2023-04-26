import React from "react";
import styled from "styled-components";
import DetailsTitle from "./title";
import { Container } from "./header.jsx";
import cardIconLeft from "../assets/promo-left-img-m.png";
import cardIconRight from "../assets/promo-right-img-m.png";
import cardIconLeftDesktop from "../assets/promo-left-img.png";
import cardIconRightDesktop from "../assets/promo-right-img.png";
import clockIcon from "../assets/clock-icon.png";
import star from "../assets/star.png";

function TournamentsAndSatelites() {
  return (
    <Container marginTop="30px">
      <DetailsTitle
        fontSizeDesktop="18px"
        borderRadiusDesktop="16px 16px 0px 0px"
        borderRadius="16px 16px 0px 0px"
        titleContent={"ტურნირები და სატელიტები"}
      ></DetailsTitle>
      <Wrapper>
        <Banner>
          <CardIconLeft></CardIconLeft>
          <CardIconRight></CardIconRight>
          <BannerText>
            სერიის ფარგლებში, ყოველდღიურად გაიმართება 3 ივენთი:
          </BannerText>
          <Schedule>
            <ClockIcon src={clockIcon} alt="Clock Icon"></ClockIcon>
            <Time>19:00 / 19:30 / 20:00</Time>
          </Schedule>
        </Banner>
        <TorunamentsInfo bottomDesktop="50%">
          <Star src={star}></Star> ყველა ტურნირზე მოხვედრა შესაძლებელია 0
          ლარიდან.
        </TorunamentsInfo>
        <TorunamentsInfo widthDesktop="50%" bottomDesktop="28%">
          ტურნირების სრული განრიგის სანახავად გადადი პოკერის ლობიში
        </TorunamentsInfo>
        <ToLobbyBtn>პოკერის ლობი</ToLobbyBtn>
      </Wrapper>
    </Container>
  );
}

export default TournamentsAndSatelites;

const Wrapper = styled.div`
  width: 100%;
  background-color: #2c3234;
  border-radius: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media only screen and (min-width: 1024px) {
    position: relative;
    border-bottom: 4px solid #25292b;
    border-left: 4px solid #25292b;
    border-right: 4px solid #25292b;
    border-radius: 0px 0px 16px 16px;
  }
`;

const Banner = styled.div`
  width: 100%;
  height: 145px;
  background-color: #171718;
  border-radius: 0px 0px 16px 16px;
  position: relative;

  @media only screen and (min-width: 1024px) {
    height: 230px;
    border-radius: 0 0 16px 16px;
  }
`;

const BannerText = styled.p`
  color: white;
  text-align: center;
  font-size: 16px;
  padding: 13px 0px 13px 0px;

  @media only screen and (min-width: 1024px) {
    font-size: 17px;
    font-weight: bold;
  }
`;

const CardIconLeft = styled.div`
  width: 80px;
  height: 49px;
  position: absolute;
  left: 0;
  bottom: 0;
  background-image: url(${cardIconLeft});

  @media only screen and (min-width: 1024px) {
    width: 201px;
    height: 140px;
    background-image: url(${cardIconLeftDesktop});
  }
`;
const CardIconRight = styled.div`
  width: 80px;
  height: 49px;
  position: absolute;
  right: 0;
  bottom: 0;
  background-image: url(${cardIconRight});

  @media only screen and (min-width: 1024px) {
    width: 201px;
    height: 140px;
    background-image: url(${cardIconRightDesktop});
    border-radius: 0px 0px 16px 16px;
  }
`;

const Schedule = styled.div`
  margin: auto;
  width: 200px;
  height: 31px;
  border-radius: 10px;
  border: 3px solid #f05a22;
  filter: drop-shadow(0px 0px 5px #ef5a21);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ClockIcon = styled.img`
  width: 20%;
  height: 100%;
  border-radius: 0px 12px 12px 0px;
  background-color: #f05a22;
  object-fit: none;
`;

const Time = styled.p`
  width: 70%;
  color: #fff;
  font-size: 13px;
  text-align: left;
`;

export const ToLobbyBtn = styled.button`
  width: 147px;
  height: 32px;
  background-color: #f05a22;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 15px;
  text-align: center;
  margin: 15px 0px 15px 0px;

  @media only screen and (min-width: 1024px) {
    position: absolute;
    bottom: 0;
  }
`;

const TorunamentsInfo = styled.p`
  max-width: 90%;
  color: white;
  font-size: 14px;
  text-align: center;
  margin-top: 12px;

  @media only screen and (min-width: 1024px) {
    position: absolute;
    bottom: ${(props) => `${props.bottomDesktop}`};
    width: ${(props) => `${props.widthDesktop}`};
  }
`;

export const Star = styled.img`
  width: 7px;
`;
