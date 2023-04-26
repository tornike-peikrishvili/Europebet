import React from "react";
import styled from "styled-components";
import exampleIcon from "../assets/example-icon.png";
import { Title } from "./rulesAndConditions";

function LeaderboardTitle() {
  return (
    <ListTitle>
      TOP20 ლიდერბორდი ჰოლდემში
      <ListTitleIcon src={exampleIcon} alt="example"></ListTitleIcon>
    </ListTitle>
  );
}

export default LeaderboardTitle;

const ListTitle = styled(Title)`
  font-size: 13px;
  margin-top: 15px;
  display: flex;
  align-items: center;
`;
const ListTitleIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;
