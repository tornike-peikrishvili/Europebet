import React from "react";
import styled from "styled-components";
import { Container } from "./header.jsx";
import Prize from "./prize";
import voucherIcon from "../assets/gift-voucher.png";
import ticketIconSm from "../assets/ticket-icon-sm.png";
import travelIconSm from "../assets/travel-icon-sm.png";

function Prizes() {
  const PrizeIcon = [travelIconSm, ticketIconSm, voucherIcon];
  const PrizeText = [
    "The Festival in Malta-ს საგზური",
    "სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The Festival in Malta-ს საგზური",
    "„ალტას“ ვაუჩერი",
  ];
  const PrizeItem = PrizeIcon.map((item, index) => (
    <Prize key={index} PrizeIcon={item} PrizeText={PrizeText[index]}></Prize>
  ));

  return <PrizeContainer marginTop="10px">{PrizeItem}</PrizeContainer>;
}

export default Prizes;

const PrizeContainer = styled(Container)`
  width: 100%;

  @media only screen and (min-width: 1024px) {
    width: 90%;
    background-color: #25292b;
    border-radius: 16px;
    margin-top: 20px;
    padding-bottom: 10px;
  }
`;
