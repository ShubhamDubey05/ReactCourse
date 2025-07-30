import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResults/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFilteredData(json);
      } catch (error) {
        setError("Unable to fetch data");
      }
      setLoading(false);
    };
    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const value = e.target.value.toLowerCase();
    if (!value) return setFilteredData(data);
    const filtered = data?.filter((food) =>
      food.name.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
  };

  const filterFood = (type) => {
    setSelectedBtn(type);
    if (type === "all") return setFilteredData(data);
    const filtered = data?.filter((food) =>
      food.type.toLowerCase().includes(type)
    );
    setFilteredData(filtered);
  };

  const filterBtns = [
    { name: "All", type: "all" },
    { name: "Breakfast", type: "breakfast" },
    { name: "Lunch", type: "lunch" },
    { name: "Dinner", type: "dinner" },
  ];

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/logo.svg" alt="logo" height={60} />
          </div>
          <div className="search">
            <input onChange={searchFood} placeholder="Search delicious food..." />
          </div>
        </TopContainer>

        <FilterContainer>
          {filterBtns.map((btn) => (
            <Button
              key={btn.type}
              isSelected={selectedBtn === btn.type}
              onClick={() => filterFood(btn.type)}
            >
              {btn.name}
            </Button>
          ))}
        </FilterContainer>
      </Container>

      <SearchResult data={filteredData} />
    </>
  );
};

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopContainer = styled.section`
  padding: 30px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .search input {
    background-color: #222;
    border: 2px solid #f22f2f;
    color: white;
    border-radius: 12px;
    height: 42px;
    font-size: 16px;
    padding: 0 14px;
    width: 240px;
    transition: 0.3s ease;

    &::placeholder {
      color: #ccc;
    }

    &:focus {
      outline: none;
      border-color: #ff5e5e;
      box-shadow: 0 0 5px #ff5e5e;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 20px;
  padding-bottom: 30px;
`;

export const Button = styled.button`
  background: ${({ isSelected }) => (isSelected ? "#f22f2f" : "#ff5656")};
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: ${({ isSelected }) =>
    isSelected ? "0 4px 10px rgba(255, 0, 0, 0.4)" : "0 2px 5px rgba(0,0,0,0.2)"};
  transition: all 0.3s ease;

  &:hover {
    background-color: #e01e1e;
    transform: scale(1.05);
  }
`;
