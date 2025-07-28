import styled from "styled-components";

const RoleDice = ({ diceValue, diceNumber }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={diceNumber}>
        <img src={`./images/dice/dice_${diceValue}.png`} alt="Dice" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  color: #0f172a;

  .dice {
    cursor: pointer;
    img {
      width: 160px;
      transition: transform 0.2s;
    }
    &:active img {
      transform: scale(0.95);
    }
  }

  p {
    font-size: 18px;
    font-weight: 500;
    margin-top: 12px;
  }
`;
