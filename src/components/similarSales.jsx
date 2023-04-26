import styled from "styled-components";
import firstSale from "../assets/first-sale.png";
import secondSale from "../assets/second-sale.png";
import thirdSale from "../assets/third-sale.png";
import { Container } from "./header.jsx";
import { Title } from "./rulesAndConditions";

function SimilarSales() {
  const imageUrls = [
    firstSale,
    secondSale,
    thirdSale,
    firstSale,
    secondSale,
    thirdSale,
  ];
  const colors = [
    "linear-gradient(0deg, rgba(13,100,155,1) 35%, rgba(27,133,200,0.8545955120204304) 65%, rgba(54,163,232,0) 100%)",
    "linear-gradient(0deg, rgba(239,84,28,1) 35%, rgba(230,100,53,0.8678113710512674) 65%, rgba(254,133,89,0) 100%)",
    "linear-gradient(0deg, rgba(26,23,108,1) 35%, rgba(42,38,158,0.8876351595975229) 65%, rgba(80,74,221,0) 100%)",
    "linear-gradient(0deg, rgba(13,100,155,1) 35%, rgba(27,133,200,0.8545955120204304) 65%, rgba(54,163,232,0) 100%)",
    "linear-gradient(0deg, rgba(239,84,28,1) 35%, rgba(230,100,53,0.8678113710512674) 65%, rgba(254,133,89,0) 100%)",
    "linear-gradient(0deg, rgba(26,23,108,1) 35%, rgba(42,38,158,0.8876351595975229) 65%, rgba(80,74,221,0) 100%)",
  ];
  const saleTitle = [
    "მიიღე 300% ქეშბ…",
    "მალე",
    "მოიგე ჯაკპოტი",
    "მიიღე 300% ქეშბ…",
    "მალე",
    "მოიგე ჯაკპოტი",
  ];
  const saleInfo = [
    "retrieve 300% bet amount as real mone…",
    "retrieve 300% bet amount as real money…",
    "retrieve 300% bet amount as real money…",
    "retrieve 300% bet amount as real mone…",
    "retrieve 300% bet amount as real money…",
    "retrieve 300% bet amount as real money…",
  ];
  const itemElements = imageUrls.map((item, index) => (
    <Item key={index}>
      <SaleImg src={item} alt="" />
      <SaleInfoWrapper background={colors[index]}>
        <TextContainer>
          <SaleTitle>{saleTitle[index]}</SaleTitle>
          <SaleInfo>{saleInfo[index]}</SaleInfo>
        </TextContainer>
      </SaleInfoWrapper>
    </Item>
  ));

  return (
    <ExtendedContainer marginTop="30px">
      <Title>მსგავსი აქციები</Title>
      <Wrapper>{itemElements}</Wrapper>
    </ExtendedContainer>
  );
}

export default SimilarSales;

const ExtendedContainer = styled(Container)`
  margin-bottom: 70px;

  @media only screen and (min-width: 1024px) {
    width: 90%;
  }
`;

const Wrapper = styled.div`
  margin: auto;
  margin-top: 20px;
  width: 343px;
  height: 180.83px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (min-width: 1024px) {
    width: 100%;
  }
`;

const Item = styled.div`
  display: inline-block;
  width: 154.57px;
  height: 180.33px;
  margin-right: 16px;
  position: relative;
  word-wrap: break-word;
`;

const SaleImg = styled.img`
  display: block;
  width: 100%;
`;

const SaleInfoWrapper = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
  background: ${(props) => `${props.background}`};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 0px 5px 5px;
`;

const SaleTitle = styled.h3`
  color: white;
  font-size: 12px;
  word-break: break-all;
  white-space: pre-wrap;
  max-height: 27px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SaleInfo = styled.p`
  font-size: 11px;
  color: white;
  word-break: break-all;
  white-space: pre-wrap;
  max-height: 27px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TextContainer = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
