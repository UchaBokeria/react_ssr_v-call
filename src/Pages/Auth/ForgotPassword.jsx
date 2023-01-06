import React from "react";
import styled from "styled-components";
import AuthContainer from "../../Components/Auth/AuthContainer";
import ForgotPasswordForm from "../../Components/Auth/ForgotPassword/ForgotPasswordForm";
import Layout from "../../Layout/Layout";

const ForgotPassword = () => {
  return (
    <Layout>
      <AuthContainer>
        <StyledForgotPassword>
          <StyledHeading>პაროლის აღდგენა</StyledHeading>
          <ForgotPasswordForm />
        </StyledForgotPassword>
      </AuthContainer>
    </Layout>
  );
};

const StyledForgotPassword = styled.div`
  max-width: 700px;
  width: 100%;
  border-radius: 30px;
  margin: 0 auto;
  padding: 55px 70px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 6px 4px rgba(51, 100, 163, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  @media only screen and (max-width: 482.98px) {
    padding: 55px 30px;
  }
  @media only screen and (max-width: 402.98px) {
    padding: 30px 15px;
  }
`;

const StyledHeading = styled.h1`
  font-size: 28px;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 55px;
`;

export default ForgotPassword;
