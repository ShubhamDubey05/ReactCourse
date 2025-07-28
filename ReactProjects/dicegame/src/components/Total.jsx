import styled from "styled-components";

const Total = ({ score }) => {
  return (
    <Container>
      <h1>{score}</h1>
      <p>Total Score</p>
    </Container>
  );
};

export default Total;

const Container = styled.div`
  background-color: #00bcd4;
  color: white;
  padding: 30px;
  border-radius: 12px;
  min-width: 200px;
  text-align: center;

  h1 {
    font-size: 64px;
    margin: 0;
  }

  p {
    font-size: 20px;
    margin: 0;
    font-weight: 500;
  }
`;
