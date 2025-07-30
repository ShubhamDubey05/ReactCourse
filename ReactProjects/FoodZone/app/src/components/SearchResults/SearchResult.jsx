import styled from "styled-components";
import { BASE_URL, Button, Container } from "../../App";

const SearchResult = ({ data }) => {
  return (
    <FoodCardContainer>
      <Container>
        <FoodCards>
          {data?.map(({ name, image, text, price }) => (
            <FoodCard key={name}>
              <div className="food_image">
                <img src={BASE_URL + image} alt={name} />
              </div>
              <div className="food_info">
                <div className="info">
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
                <Button>${price.toFixed(2)}</Button>
              </div>
            </FoodCard>
          ))}
        </FoodCards>
      </Container>
    </FoodCardContainer>
  );
};

export default SearchResult;

const FoodCardContainer = styled.section`
  background-image: url("/bg.png");
  background-size: cover;
  background-position: center;
  padding-bottom: 60px;
`;

const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  justify-content: center;
  padding-top: 60px;
`;

const FoodCard = styled.div`
  width: 320px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(14px);
  display: flex;
  gap: 14px;
  padding: 14px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(255, 87, 87, 0.25);
  }

  .food_image img {
    width: 100px;
    height: 100px;
    border-radius: 14px;
    object-fit: cover;
  }

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;

    h3 {
      margin: 0;
      font-size: 18px;
    }

    p {
      font-size: 13px;
      color: #ddd;
      margin: 6px 0;
    }

    button {
      font-size: 13px;
      padding: 6px 12px;
    }
  }
`;
