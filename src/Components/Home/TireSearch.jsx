import React from 'react';
import styled from 'styled-components';
import Tires from '../../Assets/images/Icons/TireSearch/tires.png'

const TireSearch = () => {
    return (
        <TireSearchContainer>
            <StyledTitle>საბურავების ძებნა</StyledTitle>
            <StyledSearchForm>
                <CheckboxContainer>
                    <StyledCheckboxLabel htmlFor="winter">
                        <input type='checkbox' value="" name='winter' checked={true}/>
                        ზამთარი
                    </StyledCheckboxLabel>
                    <StyledCheckboxLabel htmlFor="summer">
                        <input type='checkbox' value="" name='summer'/>
                        ზაფხული
                    </StyledCheckboxLabel>
                    <StyledCheckboxLabel htmlFor="allSeason">
                        <input type='checkbox' value="" name='allSeason'/>
                        ყველა სეზონი
                    </StyledCheckboxLabel>
                </CheckboxContainer>
                <StyledPropertiesContainer>
                    <StyledSelect>
                        <option value="">სიგანე</option>
                    </StyledSelect>
                    <StyledSelect>
                        <option value="">სიმაღლე</option>
                    </StyledSelect>
                    <StyledSelect>
                        <option value="">დისკი</option>
                    </StyledSelect>
                </StyledPropertiesContainer>
                <StyledTireImage>
                    <img src={Tires} alt="tires"/>
                </StyledTireImage>
                <StyledTireSubmit>
                    ძებნა
                </StyledTireSubmit>
            </StyledSearchForm>
        </TireSearchContainer>
    );
};


const TireSearchContainer = styled.div`
  height: 425px;
  width: 100%;
  background-color: rgba(51, 100, 163, 0.1);
  //margin: 35px 0;
  border-radius: 30px;
  padding: 25px 30px;
  //position: absolute;
  //top: 50%;
  //right: 50px;
  //transform: translateY(-50%);
  z-index: 9;
  @media only screen and (max-width: 1199.98px) {
    height: 465px;
  }
`

const StyledTitle = styled.h2`
  font-size: 20px;
  color: ${({theme}) => theme.colors.blue};
  font-family: ${({theme}) => theme.fontFamily.font2};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  margin-bottom: 30px;
`
const StyledSearchForm = styled.form`
`

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 1199.98px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  @media only screen and (max-width: 991.98px) {
    flex-direction: row;
    align-items: center;
    //margin-top: 35px;
  }
  @media only screen and (max-width: 414.98px) {
    flex-direction: column;
    align-items: flex-start;
  }
  
`
const StyledCheckboxLabel = styled.label`
  font-size: 16px;
  color: ${({theme}) => theme.colors.black};
  font-family: ${({theme}) => theme.fontFamily.font1};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media only screen and (max-width: 1529.98px) {
    font-size: 14px;
  }
`

const StyledPropertiesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 35px;
  margin-bottom: 25px;
  gap: 10px;
  @media only screen and (max-width: 1199.98px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 25px;
  }
  @media only screen and (max-width: 991.98px) {
    flex-direction: row;
    align-items: center;
    margin-top: 35px;
  }
  @media only screen and (max-width: 474.98px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 25px;
  }
`

const StyledSelect = styled.select`
  padding: 5px 10px;
  border: 1px solid ${({theme}) => theme.colors.gray};
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.white};
  font-size: 16px;
  color: ${({theme}) => theme.colors.black};
  font-family: ${({theme}) => theme.fontFamily.font1};
  width: 140px;
  &:focus {
    border: 1px solid ${({theme}) => theme.colors.blue};
    outline: none;
  }
  @media only screen and (max-width: 1529.98px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 1199.98px) {
    width: 100%;
  }
`

const StyledTireImage = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 70px auto 0;
  @media only screen and (max-width: 1199.98px) {
    width: 235px;
    margin: 25px auto 0;
  }
  @media only screen and (max-width: 991.98px) {
    flex-direction: row;
    align-items: center;
    margin: 70px auto 0;
    width: 375px;
  }
  @media only screen and (max-width: 474.98px) {
    width: 235px;
    margin: 70px auto 0;
  } 
  @media only screen and (max-width: 414.98px) {
    width: 220px;
    margin: 25px auto 0;
  }

  img {
    width: 100%;
  }
`

const StyledTireSubmit = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.blue};
  color: ${({theme}) => theme.colors.white};
  font-size: 14px;
  font-family: ${({theme}) => theme.fontFamily.font2};
`


export default TireSearch;