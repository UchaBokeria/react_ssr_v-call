import React from "react";
import styled from "styled-components";

export const Admd = () => {
  return (
    <StyledAdmd>
      <StyledBadge>
        <StyledBadgeText>რეკლამა</StyledBadgeText>
      </StyledBadge>
      <StyledAdText>
        თქვენი ბანერის ადგილი
        </StyledAdText>
    </StyledAdmd>
  );
};

export const Adlg = () => {
  return (
    <StyledAdlg>
      <StyledBadge>
        <StyledBadgeText>რეკლამა</StyledBadgeText>
      </StyledBadge>
      <StyledAdText>
        თქვენი ბანერის ადგილი
        </StyledAdText>
    </StyledAdlg>
  );
};



const StyledAdmd = styled.div`
  width: 100%;
  height: 140px;
  background-color: rgba(51, 100, 163, 0.05);
  border-radius: 10px;
  border: 1px solid rgba(51, 100, 163, 0.1);
  margin-bottom: 35px;
  position: relative;
`;

const StyledAdlg = styled.div`
  width: 100%;
  height: 298px;
  background-color: rgba(51, 100, 163, 0.05);
  border-radius: 10px;
  border: 1px solid rgba(51, 100, 163, 0.1);
  margin-bottom: 35px;
  position: relative;
`;

const StyledBadge = styled.div`
  height: 100%;
  width: 50px;
  background-color: ${({ theme }) => theme.colors.orange};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 767.98px) {
    width: 30px;
  }
`;

const StyledBadgeText = styled.p`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fontFamily.font2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
  transform: rotate(-90deg);
  @media only screen and (max-width: 767.98px) {
    font-size: 14px;
  }
`;

const StyledAdText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 32px;
  font-family: ${({ theme }) => theme.fontFamily.font2};
  font-family: ${({ theme }) => theme.fontFamily.black};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  @media only screen and (max-width: 991.98px) {
    font-size: 22px;
  }
  @media only screen and (max-width: 767.98px) {
    font-size: 18px;
    text-align: center;
  }
`
