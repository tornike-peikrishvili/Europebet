import React from "react";
import styled from "styled-components";
import banner from "../assets/banner.jpg";

function Banner() {
  return <BannerImg src={banner} alt="" />;
}

export default Banner;

const BannerImg = styled.img`
  width: 100%;
`;
