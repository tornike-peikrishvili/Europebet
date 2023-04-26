import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

function Header() {
  return (
    <Container width="90%">
      <Wrapper width="100%" margin="auto">
        <Logo src={logo} alt="logo" />
        <Wrapper>
          <Button background="transparent">Sign up</Button>
          <Button background="#EF602A">Sign in</Button>
        </Wrapper>
      </Wrapper>
    </Container>
  );
}

export default Header;

export const Container = styled.section`
  width: ${(props) => `${props.width}`};
  margin: auto;
  margin-top: ${(props) => `${props.marginTop}`};
`;

const Wrapper = styled.div`
  width: ${(props) => `${props.width}`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  margin: ${(props) => `${props.margin}`};

  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;

const Logo = styled.img`
  width: 23.72px;
  height: 24px;
`;

const Button = styled.button`
  width: 72px;
  height: 32px;
  background-color: ${(props) => `${props.background}`};
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 15px;
  font-weight: 600;
`;
