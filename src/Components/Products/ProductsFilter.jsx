import React from "react";
import styled from "styled-components";
import { Dropdown } from "react-bootstrap";

const ProductsFilter = () => {
  return (
    <FiltersWrapper>
      <FilterWrapper>
        <FilterTitle>კატეგორიები</FilterTitle>
        <CategoryItem>მსუბუქი</CategoryItem>
      </FilterWrapper>
      <FilterWrapper>
        <FilterTitle>საბურავის სიგანე</FilterTitle>
        <FilterDropdown>
          <FilterDropdownToggle>
            50
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
          </FilterDropdownToggle>
          <FilterDropdownMenu>
            <FilterDropdownItem>
              <button>50</button>
            </FilterDropdownItem>
            <FilterDropdownItem>
              <button>70</button>
            </FilterDropdownItem>
            <FilterDropdownItem>
              <button>80</button>
            </FilterDropdownItem>
          </FilterDropdownMenu>
        </FilterDropdown>
      </FilterWrapper>
      <FilterWrapper>
        <FilterTitle>ზომა</FilterTitle>
        <FilterCheckboxWrapper>
          <FilterCheckbox type="checkbox" checked />
          50
        </FilterCheckboxWrapper>
        <FilterCheckboxWrapper>
          <FilterCheckbox type="checkbox" />
          70
        </FilterCheckboxWrapper>
        <FilterCheckboxWrapper>
          <FilterCheckbox type="checkbox" />
          80
        </FilterCheckboxWrapper>
        <FilterCheckboxWrapper>
          <FilterCheckbox type="checkbox" />
          საბურავების სიგანე
        </FilterCheckboxWrapper>
      </FilterWrapper>
      <SubmitBtn>ფილტრის გასუფთავება</SubmitBtn>
    </FiltersWrapper>
  );
};

const FiltersWrapper = styled.form`
  max-width: 400px;
  width: 100%;
  background-color: #ebeff6;
  /* grid-row: 1 / 2; */
  padding: 30px;
  border-radius: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 30px;
`;

const FilterWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const FilterTitle = styled.h2`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fontFamily.font2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.blue};
`;

const CategoryItem = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  border: none;
  border-radius: 3px;
  width: 100%;
  padding: 16px 10px;
  text-align: left;
`;

const FilterDropdown = styled(Dropdown)`
  position: relative;
  width: 100%;
`;

const FilterDropdownMenu = styled(Dropdown.Menu)`
  position: absolute;
  top: 50px !important;
  left: 50% !important;
  z-index: 99999;
  transform: translateX(-50%) !important;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 6px 4px rgba(51, 100, 163, 0.25);
  border: none;
  width: 100%;
`;

const FilterDropdownToggle = styled(Dropdown.Toggle)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 13px 10px;
  border: none;
  border-radius: 3px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
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

const FilterDropdownItem = styled(Dropdown.Item)`
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

const FilterCheckboxWrapper = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.font1};
`;
const FilterCheckbox = styled.input`
  &[type="checkbox"] {
  }
`;

const SubmitBtn = styled.button`
  padding: 6px 16px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  text-transform: uppercase;
  border: none;
  border-radius: 40px;
  outline: 2px solid transparent;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.colors.white};
    outline: 2px solid ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export default ProductsFilter;
