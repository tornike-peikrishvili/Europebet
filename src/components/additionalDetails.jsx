import React from "react";
import styled from "styled-components";
import DetailsTitle from "./title";
import { Container } from "./header.jsx";

function AdditionalDetails() {
  return (
    <AdditionalDetailsContainer>
      <DetailsTitle
        borderRadius="16px"
        titleContent="დამატებით შედგება, ქეშგეიმის, ტურნირების და სპინ პოკერის 12 Side ლიდერბორდი"
        titleInfo="* Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის ლობიში."
      ></DetailsTitle>
    </AdditionalDetailsContainer>
  );
}

const AdditionalDetailsContainer = styled(Container)`
  width: 100%;
  margin-top: 25px;
`;

export default AdditionalDetails;
