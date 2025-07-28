import { useState } from "react";
import styled from "styled-components";
import Total from "./Total";
import Selector from "./Selector";
import RoleDice from "./RoleDice";
import Rules from "./Rules";
import { Button, Outline } from "../styled/Button";

const Play = () => {
  const [score, setScore] = useState(0);
  const [number, setNumber] = useState();
  const [diceValue, setDiceValue] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateDiceNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const diceNumber = () => {
    if (!number) {
      setError("Please select a number");
      return;
    }

    const newDiceValue = generateDiceNumber(1, 6);
    setDiceValue(newDiceValue);

    if (newDiceValue === number) {
      setScore((prev) => prev + newDiceValue);
    } else {
      setScore((prev) => prev - 2);
    }

    setNumber(undefined);
    setError("");
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <Main>
      <TopSection>
        <Total score={score} />
        <Selector error={error} number={number} setNumber={setNumber} />
      </TopSection>

      <RoleDice diceValue={diceValue} diceNumber={diceNumber} />

      <div className="btns">
        <Outline onClick={resetScore}>Reset</Outline>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide Rules" : "Show Rules"}
        </Button>
      </div>

      {showRules && <Rules />}
    </Main>
  );
};

export default Play;

const Main = styled.main`
  min-height: 100vh;
  background-color: #e3f2fd;
  padding: 30px;
  font-family: 'Segoe UI', sans-serif;

  .btns {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;

const TopSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 40px;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
`;
