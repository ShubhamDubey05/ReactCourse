import styled from "styled-components";

const Selector = ({ error, number, setNumber }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  return (
    <Wrapper>
      <p>{error}</p>
      <NumberContainer>
        {arrNumber.map((value, i) => (
          <Box
            key={i}
            onClick={() => setNumber(value)}
            isSelected={value === number}
          >
            {value}
          </Box>
        ))}
      </NumberContainer>
      <Instruction>Select Number</Instruction>
    </Wrapper>
  );
};

export default Selector;

const Wrapper = styled.div`
  font-family: sans-serif;
  padding: 20px;
  text-align: center;
  p {
    color: red;
  }
`;

const NumberContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 2px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  border-radius: 12px;
  background-color: ${(props) => (props.isSelected ? "#222" : "#fff")};
  color: ${(props) => (props.isSelected ? "#fff" : "#000")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

const Instruction = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-top: 10px;
`;
