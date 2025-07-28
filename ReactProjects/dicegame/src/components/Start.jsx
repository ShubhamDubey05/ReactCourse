import React from 'react';
import styled from "styled-components";
import { Button } from '../styled/Button';

const Start = ({ toggle }) => {
  return (
    <FullPage>
      <Container>
        <ImageSection>
          <img src="/images/dices.png" alt="dice-img" />
        </ImageSection>

        <Content>
          <Title>🎲 Dice Game</Title>
          <Subtitle>Are you ready to roll?</Subtitle>
          <Button onClick={toggle}>🎮 Play Now</Button>
        </Content>
      </Container>
    </FullPage>
  );
};

export default Start;

// ✅ Full screen container without margin/padding
const FullPage = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

// ✅ Flex layout filling full space
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
`;

// ✅ Bigger image on the left
const ImageSection = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 400px;
    max-width: 100%;
  }
`;

// ✅ Right-side content
const Content = styled.div`
  flex: 1;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 72px;
  font-weight: 900;
  margin-bottom: 10px;
  color: #222;
`;

const Subtitle = styled.p`
  font-size: 22px;
  margin-bottom: 40px;
  color: #444;
  font-weight: 500;
`;


