import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Layout from "../../Layout/Layout";

import NotFound404 from "../../Assets/images/Icons/not-found-404.svg";
import NotFoundBg from "../../Assets/images/Backgrounds/not-found-bg.png";

const NotFound = () => {
  return (
    <Layout>
      <NotFoundContainer>
        <NotFoundImg>
          <img src={NotFound404} alt="404" />
        </NotFoundImg>
        <NotFoundHeading>გვერდი ვერ მოიძებნა</NotFoundHeading>
        <NotFoundText>
          თქვენს მიერ მოთხოვნილი გვერდი ვერ მოიძებნა, გთხოვთ დაბრუნდეთ მთავარ
          გვერდზე.
        </NotFoundText>
        <NotFoundLink to="/">მთავარი გვერდი</NotFoundLink>
      </NotFoundContainer>
    </Layout>
  );
};

const NotFoundContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${NotFoundBg});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 35px;
  padding: 80px;
`;

const NotFoundImg = styled.div`
  max-width: 500px;
  width: 100%;
  img {
    width: 100%;
  }
`;

const NotFoundHeading = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fontFamily.font2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;
`;

const NotFoundText = styled.p`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  color: ${({ theme }) => theme.colors.black};
  transition: all 0.3s ease-in-out;
  text-align: center;
`;

const NotFoundLink = styled(Link)`
  padding: 6px 16px;
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

export default NotFound;
