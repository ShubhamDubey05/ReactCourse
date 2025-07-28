import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to Play Dice Game</h2>
      <div className="text">
        <p>👉 Select any number first</p>
        <p>🎲 Click on the Dice</p>
        <p>
          ✅ If selected number and dice value match, score increases by dice
          value
        </p>
        <p>❌ Wrong guess will deduct 2 points from your total score</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  background-color: #aed581;
  padding: 20px;
  margin: 24px auto 0 auto;
  max-width: 800px;
  border-radius: 10px;

  h2 {
    font-size: 24px;
    text-align: center;
  }

  .text {
    margin-top: 20px;
    font-size: 18px;
    line-height: 1.6;
  }
`;
