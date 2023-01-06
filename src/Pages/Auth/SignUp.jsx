import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AuthContainer from "../../Components/Auth/AuthContainer";
import OrganizationForm from "../../Components/Auth/SignUp/OrganizationForm";
import PhysicalForm from "../../Components/Auth/SignUp/PhysicalForm";
import Layout from "../../Layout/Layout";

const SignUp = () => {
  const [authType, setAuthType] = useState("physicalPerson");

  return (
    <Layout>
      <AuthContainer>
        <StyledSignup>
          <StyledHeading>რეგისტრაცია</StyledHeading>
          <AuthTypeWrapper>
            <AuthTypeButton
              onClick={() => setAuthType("physicalPerson")}
              className={authType === "physicalPerson" ? "active" : ""}
            >
              ფიზიკური პირი
            </AuthTypeButton>
            <AuthTypeButton
              onClick={() => setAuthType("organization")}
              className={authType === "organization" ? "active" : ""}
            >
              ორგანიზაცია
            </AuthTypeButton>
          </AuthTypeWrapper>

          {authType === "physicalPerson" ? (
            <PhysicalForm />
          ) : (
            <OrganizationForm />
          )}
          <LinkWrapper register>
            <span>უკვე გაქვს ანგარიში?</span>{" "}
            <StyledLink className="register" to="/signin">
              ავტორიზაცია
            </StyledLink>
          </LinkWrapper>
        </StyledSignup>
      </AuthContainer>
    </Layout>
  );
};

const StyledSignup = styled.div`
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

const AuthTypeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 30px;
  margin-bottom: 30px;
  @media only screen and (max-width: 402.98px) {
    flex-direction: column;
  }
`;

const AuthTypeButton = styled.button`
  padding: 6px 9px;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.blue};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;
  /* border: none; */
  border-radius: 40px;
  border: 2px solid ${({ theme }) => theme.colors.blue};
  transition: all 0.3s ease-in-out;
  @media only screen and (max-width: 1529.98px) {
    padding: 6px 9px;
  }
  @media only screen and (max-width: 359px) {
    width: 100%;
  }

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.colors.blue};
    /* outline: 2px solid ${({ theme }) => theme.colors.blue}; */
    color: ${({ theme }) => theme.colors.white};
  }
  &:focus {
    /* outline: 2px solid ${({ theme }) => theme.colors.blue} !important; */
    outline: none;
  }
  &.active {
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.blue};
  }
`;

const LinkWrapper = styled.div`
  width: 100%;
  margin-top: 22px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  ${(props) =>
    props.register &&
    `
    justify-content: center;
  
  `}
  span {
    font-size: 14px;
    font-family: ${({ theme }) => theme.fontFamily.font1};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const StyledLink = styled(Link)`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.gray};
  transition: all 0.3s ease-in-out;
  &.register {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: underline;
  }
  &.terms-conditions {
    color: ${({ theme }) => theme.colors.blue};
    &:hover {
      text-decoration: underline;
    }
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export default SignUp;
