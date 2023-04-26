import React from "react";
import styled from "styled-components";
import { Container } from "./header.jsx";
import TourItem from "./tourItem";
import hotelIcon from "../assets/final-item-hotel-icon.png";
import moneyIcon from "../assets/final-item-money-icon.png";
import ticketIcon from "../assets/final-item-ticket-icon.png";
import eventIcon from "../assets/final-item-event-icon.png";

function Tour() {
  const itemName = [
    "ორმხრივი ავიაბილეთი",
    "The Festival in Malta -ს მეინ ივენთის ბაი-ინი",
    "Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი",
    "სასტუმრო",
    "€500 სახარჯი ფული",
  ];
  const itemIcon = [ticketIcon, hotelIcon, eventIcon, ticketIcon, moneyIcon];

  const tourItem = itemName.map((item, index) => (
    <TourItem key={index} itemName={item} itemIcon={itemIcon[index]}></TourItem>
  ));

  return <TourWrapper>{tourItem}</TourWrapper>;
}

export default Tour;

const TourWrapper = styled(Container)`
  width: 301px;
  padding-bottom: 8px;

  @media only screen and (min-width: 1024px) {
    max-width: 100%;
  }
`;
