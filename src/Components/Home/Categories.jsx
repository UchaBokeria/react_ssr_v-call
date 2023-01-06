import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "საბურავები",
    image:
      "https://www.freepnglogos.com/uploads/tire-png/tire-assurance-weatherready-tires-goodyear-tires-15.png",
    link: "/products/tires",
  },
  {
    id: 2,
    name: "საბურავები",
    image:
      "https://www.freepnglogos.com/uploads/tire-png/tire-assurance-weatherready-tires-goodyear-tires-15.png",
    link: "/products/tires",
  },
  {
    id: 3,
    name: "საბურავები",
    image:
      "https://www.freepnglogos.com/uploads/tire-png/tire-assurance-weatherready-tires-goodyear-tires-15.png",
    link: "/products/tires",
  },
  {
    id: 4,
    name: "საბურავები",
    image:
      "https://www.freepnglogos.com/uploads/tire-png/tire-assurance-weatherready-tires-goodyear-tires-15.png",
    link: "/products/tires",
  },
  {
    id: 5,
    name: "საბურავები",
    image:
      "https://www.freepnglogos.com/uploads/tire-png/tire-assurance-weatherready-tires-goodyear-tires-15.png",
    link: "/products/tires",
  },
  {
    id: 6,
    name: "საბურავები",
    image:
      "https://www.freepnglogos.com/uploads/tire-png/tire-assurance-weatherready-tires-goodyear-tires-15.png",
    link: "/products/tires",
  },
  {
    id: 7,
    name: "საბურავები",
    image:
      "https://www.freepnglogos.com/uploads/tire-png/tire-assurance-weatherready-tires-goodyear-tires-15.png",
    link: "/products/tires",
  },
  {
    id: 8,
    name: "საბურავები",
    image:
      "https://www.freepnglogos.com/uploads/tire-png/tire-assurance-weatherready-tires-goodyear-tires-15.png",
    link: "/products/tires",
  },
  {
    id: 9,
    name: "საბურავები",
    image:
      "https://www.freepnglogos.com/uploads/tire-png/tire-assurance-weatherready-tires-goodyear-tires-15.png",
    link: "/products/tires",
  },
  {
    id: 10,
    name: "საბურავები",
    image:
      "https://www.freepnglogos.com/uploads/tire-png/tire-assurance-weatherready-tires-goodyear-tires-15.png",
    link: "/products/tires",
  },
  {
    id: 11,
    name: "საბურავები",
    image:
      "https://www.freepnglogos.com/uploads/tire-png/tire-assurance-weatherready-tires-goodyear-tires-15.png",
    link: "/products/tires",
  },
  {
    id: 12,
    name: "საბურავები",
    image:
      "https://www.freepnglogos.com/uploads/tire-png/tire-assurance-weatherready-tires-goodyear-tires-15.png",
    link: "/products/tires",
  },
  {
    id: 14,
    name: "საბურავები",
    image:
      "https://www.freepnglogos.com/uploads/tire-png/tire-assurance-weatherready-tires-goodyear-tires-15.png",
    link: "/products/tires",
  },
  {
    id: 15,
    name: "საბურავები",
    image:
      "https://www.freepnglogos.com/uploads/tire-png/tire-assurance-weatherready-tires-goodyear-tires-15.png",
    link: "/products/tires",
  },
];

const Category = (props) => {
  return (
    <Link to={props.category.link}>
      <StyledCol>
        <StyledCategoryImage>
          <img src={props.category.image} alt={props.category.name} />
        </StyledCategoryImage>
        <StyledCategoryName>{props.category.name}</StyledCategoryName>
      </StyledCol>
    </Link>
  );
};

const Categories = () => {
  return (
    <StyledContainer>
      <StyledTitle>კატეგორიები</StyledTitle>
      <StyledRow>
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </StyledRow>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  margin-top: 75px;
  margin-bottom: 75px;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    //max-width: 1320px;
    max-width: calc(100% - 260px);
  }
`;

const StyledTitle = styled.h2`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fontFamily.font2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 25px;
`;
const StyledRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-start: 1;
  grid-column-end: 6;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 30px;
  width: 100%;
  @media only screen and (max-width: 458.98px) {
    display: flex;
    justify-content: space-between;
  }
`;

const StyledCol = styled.div`
  flex-shrink: 0;
  background-color: rgba(51, 100, 163, 0.1);
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  padding: 0;
  border-radius: 10px;
  outline: 2px solid transparent;
  transition: all 0.3s ease-in-out;
  @media only screen and (max-width: 458.98px) {
    height: 150px;
    width: 150px;
    gap: 20px;
  }
  @media only screen and (max-width: 458.98px) {
    height: 130px;
    width: 130px;
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.white};
    outline: 2px solid ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.blue};
    transition: all 0.3s ease-in-out;

    img {
      transform: scale(1.1);
      transition: all 0.3s ease-in-out;
    }
  }
`;

const StyledCategoryImage = styled.div`
  width: 100px;
  height: 100px;
  @media only screen and (max-width: 458.98px) {
    width: 80px;
    height: 80px;
  }
  @media only screen and (max-width: 358.98px) {
    width: 70px;
    height: 70px;
  }

  img {
    width: 100%;
    transition: all 0.3s ease-in-out;
  }
`;

const StyledCategoryName = styled.h3`
  font-size: 13px;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  color: ${({ theme }) => theme.colors.black};
`;

export default Categories;
