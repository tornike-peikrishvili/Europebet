import React from "react";
import styled from "styled-components";
import { Container } from "./header";
import { ToLobbyBtn } from "./tournamentsAndSatelites";

function Play() {
  return (
    <ExtendedContainer>
      <PlayButton>ითამაშე</PlayButton>
    </ExtendedContainer>
  );
}

export default Play;

const ExtendedContainer = styled(Container)`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 55px;
  background-color: #171718;
  border-top: 4px solid #f05a22;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 1024px) {
    max-width: 55%;
  }
`;

const PlayButton = styled(ToLobbyBtn)`
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;
