import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, Dropdown } from "react-bootstrap";
import { useParams, useSearchParams, useLocation } from "react-router-dom";

import Layout from "../../Layout/Layout";
import CustomContainer from "../../Components/Layout/CustomContainer";
import { Admd } from "../../Components/Ads/Ads";
import ProductsContainer from "../../Components/Products/ProductsContainer";
import ProductsFilter from "../../Components/Products/ProductsFilter";

// import SquareSortIcon from "../../Assets/Icons/square-sort.svg";
// import ListSortIcon from "../../Assets/Icons/list-sort.svg";

const Products = () => {
  const params = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  const [sortView, setSortView] = useState("grid");
  const [sortType, setSortType] = useState("");

  const search = useLocation().search;
  const category = new URLSearchParams(search).get("category");
  const page = new URLSearchParams(search).get("page");

  useEffect(() => {
    setSearchParams({ category: "trucks", page: "1" });
  }, []);

  console.log(params);
  console.log(category, page);
  console.log(sortView);
  return (
    <Layout>
      <CustomContainer>
        <Admd />
      </CustomContainer>
      <StyledCategorySortContainer>
        <CategoryWrapper>
          <CategoryName>
            {params.category === "tires" ? "საბურავები" : ""}{" "}
            <span>{`- ${category === "trucks" ? "სატვირთო" : ""}`}</span>
          </CategoryName>
        </CategoryWrapper>
        <SortWrapper>
          <SortByDropdown>
            <SortByDropdownToggle>
              {(sortType === "" && "სორტირება") ||
                (sortType === "new" && "ახალი პროდუქცია") ||
                (sortType === "ascending" && "ფასი ზრდადი") ||
                (sortType === "descending" && "ფასი კლებადი")}
              <svg
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1.98145L1.63581 6.99065L7 11.9998"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </SortByDropdownToggle>
            <SortByDropdownMenu>
              <SortByDropdownItem>
                <button onClick={() => setSortType("new")}>
                  ახალი პროდუქცია
                </button>
              </SortByDropdownItem>
              <SortByDropdownItem>
                <button onClick={() => setSortType("ascending")}>
                  ფასი ზრდადი
                </button>
              </SortByDropdownItem>
              <SortByDropdownItem>
                <button onClick={() => setSortType("descending")}>
                  ფასი კლებადი
                </button>
              </SortByDropdownItem>
            </SortByDropdownMenu>
          </SortByDropdown>
          <AlignWrapper>
            <AlignButton
              onClick={() => setSortView("grid")}
              sortView
              className={sortView === "grid" ? "grid" : ""}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="6"
                  height="6"
                  rx="0.5"
                  stroke="#B3B3B3"
                />
                <rect
                  x="0.5"
                  y="11.5"
                  width="6"
                  height="6"
                  rx="0.5"
                  stroke="#B3B3B3"
                />
                <rect
                  x="11.5"
                  y="0.5"
                  width="6"
                  height="6"
                  rx="0.5"
                  stroke="#B3B3B3"
                />
                <rect
                  x="11.5"
                  y="11.5"
                  width="6"
                  height="6"
                  rx="0.5"
                  stroke="#B3B3B3"
                />
              </svg>
            </AlignButton>
            <AlignButton
              onClick={() => setSortView("list")}
              className={sortView === "list" ? "list" : ""}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="16" width="18" height="2" fill="#B3B3B3" />
                <rect y="12" width="18" height="2" fill="#B3B3B3" />
                <rect y="8" width="18" height="2" fill="#B3B3B3" />
                <rect y="4" width="18" height="2" fill="#B3B3B3" />
                <rect width="18" height="2" fill="#B3B3B3" />
              </svg>
            </AlignButton>
          </AlignWrapper>
        </SortWrapper>
      </StyledCategorySortContainer>
      <StyledProductsContainer>
        <ProductsFilter />
        <ProductsContainer />
      </StyledProductsContainer>
    </Layout>
  );
};

const StyledCategorySortContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  width: 100%;
  position: relative;
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
  @media only screen and (max-width: 991.98px) {
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 30px;
  }
`;

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;
const CategoryName = styled.h1`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fontFamily.font2};
  span {
    font-family: ${({ theme }) => theme.fontFamily.font1};
    font-weight: normal;
  }
`;

const SortWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 50px;
  @media only screen and (max-width: 991.98px) {
    justify-content: space-between;
    width: 100%;
  }
`;

const AlignWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`;

const StyledProductsContainer = styled(Container)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 50px;
  width: 100%;
  margin-bottom: 50px;
  position: relative;
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

const SortByDropdown = styled(Dropdown)`
  position: relative;
`;

const SortByDropdownMenu = styled(Dropdown.Menu)`
  position: absolute;
  top: 50px !important;
  left: 50% !important;
  z-index: 99999;
  transform: translateX(-50%) !important;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 6px 4px rgba(51, 100, 163, 0.25);
  border: none;
`;

const SortByDropdownToggle = styled(Dropdown.Toggle)`
  padding: 6px 16px;
  border: none;
  border-radius: 30px;
  /* border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0; */
  height: 100%;
  background-color: ${(props) => props.theme.colors.blue};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  outline: 2px solid transparent;
  transition: all 0.3s ease-in-out;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #ebeff6;
    /* outline: 2px solid ${({ theme }) => theme.colors.blue}; */
    color: ${({ theme }) => theme.colors.blue};
  }
  &:focus {
    box-shadow: none !important;
    background-color: ${({ theme }) => theme.colors.white} !important;
    outline: 2px solid ${({ theme }) => theme.colors.blue} !important;
    color: ${({ theme }) => theme.colors.blue} !important;
  }
  &:after {
    display: none;
  }
  svg {
    width: 12px;
    height: 12px;
    margin-left: 15px;
    transform: rotate(-90deg);
  }
`;

const SortByDropdownItem = styled(Dropdown.Item)`
  padding: 0;
  &:hover {
    cursor: pointer;
    background-color: rgba(51, 100, 163, 0.1);
    button {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
  button {
    border: none;
    background-color: transparent;
    text-align: left;
    font-size: 14px;
    font-family: ${({ theme }) => theme.fontFamily.font1};
    color: ${({ theme }) => theme.colors.black};
    width: 100%;
    height: 100%;
    padding: 15px;
  }
`;

const AlignButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  border-radius: 2px;
  &.grid {
    background-color: #ebeff6;
    rect {
      stroke: #3364a3;
    }
  }
  &.list {
    background-color: #ebeff6;
    rect {
      fill: #3364a3;
    }
  }
`;

export default Products;
