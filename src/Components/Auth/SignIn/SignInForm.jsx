import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { validEmail } from "../../../Regex/Regex";
import UserIcon from "../../../Assets/images/Icons/user.svg";
import LockIcon from "../../../Assets/images/Icons/lock.svg";

const SignInForm = () => {
  const [authType, setAuthType] = useState("physicalPerson");
  const [email, setEmail] = useState("");
  const emailInput = useRef();
  const organizationInput = useRef();
  const [password, setPassword] = useState("");

  const [organizationId, setOrganizationId] = useState("");

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (validEmail.test(email)) {
      setLoading(true);
      setError(false);
      setMessage("");
      setTimeout(() => {
        setLoading(false);
        setError(true);
        setMessage(
          authType === "physicalPerson"
            ? "ელ-ფოსტა ან პაროლი არასწორია"
            : "საიდენტიფიკაციო ნომერი ან პაროლი არასწორია"
        );
      }, 2000);
      // } else if (!validEmail.test(email)) {
      //   setError(true);
      //   setMessage("ელ-ფოსტა არასწორია");
      //   emailInput.current.focus();
      //   // setEmailError("ელ-ფოსტა არასწორია");
      // }
    } else {
      if (authType === "physicalPerson") {
        if (email === "" && password === "") {
          setError(true);
          setMessage("შეავსეთ ყველა ველი");
          // setEmailError("");
          // setPasswordError("");
        } else if (!validEmail.test(email)) {
          setError(true);
          setMessage("ელ-ფოსტა არასწორია");
          emailInput.current.focus();
          // setEmailError("ელ-ფოსტა არასწორია");
        }
      } else if (authType ==="organization") {
        if (organizationId === "" && password === "") {
          setError(true);
          setMessage("შეავსეთ ყველა ველი");
          // setEmailError("");
          // setPasswordError("");
        } else if (organizationId === "") {
          setError(true);
          setMessage("ს/ნ არასწორია");
          organizationInput.current.focus();
          // setEmailError("ელ-ფოსტა არასწორია");
        }
      }
    }
  };

  const handleChangeType = (type) => {
    setAuthType(type);
    clearInputs();
  };

  const clearInputs = () => {
    setEmail("");
    setPassword("");
    setOrganizationId("");
    setError(false);
    setLoading(false);
  };

  return (
    <StyledSignIn>
      <StyledHeading>ავტორიზაცია</StyledHeading>
      <AuthTypeWrapper>
        <AuthTypeButton
          onClick={() => handleChangeType("physicalPerson")}
          className={authType === "physicalPerson" ? "active" : ""}
        >
          ფიზიკური პირი
        </AuthTypeButton>
        <AuthTypeButton
          onClick={() => handleChangeType("organization")}
          className={authType === "organization" ? "active" : ""}
        >
          ორგანიზაცია
        </AuthTypeButton>
      </AuthTypeWrapper>
      {error && (
        <AuthMessageWrapper>
          <AuthMessage>{message}</AuthMessage>
        </AuthMessageWrapper>
      )}
      {authType === "physicalPerson" ? (
        <AuthForm onSubmit={handleLogin}>
          <AuthInputLabel>
            <AuthInput
              placeholder="ელ-ფოსტა"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={emailInput}
            />
          </AuthInputLabel>
          <AuthInputLabel>
            <AuthInput
              placeholder="პაროლი"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </AuthInputLabel>
        </AuthForm>
      ) : (
        <AuthForm onSubmit={handleLogin}>
          <AuthInputLabel>
            <AuthInput
              placeholder="საიდენტიფიკაციო ნომერი"
              type="text"
              value={organizationId}
              onChange={(e) => setOrganizationId(e.target.value)}
              ref={organizationInput}
            />
          </AuthInputLabel>
          <AuthInputLabel>
            <AuthInput
              placeholder="პაროლი"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </AuthInputLabel>
        </AuthForm>
      )}
      <LinkWrapper>
        <StyledLink to="/forgot-password">დაგავიწყდა პაროლი?</StyledLink>
      </LinkWrapper>
      <SubmitButton onClick={handleLogin}>
        შესვლა
        {loading && <span className="spinner-border spinner-border-sm"></span>}
      </SubmitButton>
      <LinkWrapper register>
        <span>არ გაქვს ანგარიში? გაიარე</span>{" "}
        <StyledLink className="register" to="/signup">
          რეგისტრაცია
        </StyledLink>
      </LinkWrapper>
    </StyledSignIn>
  );
};

const StyledSignIn = styled.div`
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
  font-size: 30px;
  font-family: ${({ theme }) => theme.fontFamily.font2};
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
  font-family: ${({ theme }) => theme.fontFamily.font2};
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

const AuthMessageWrapper = styled.div`
  height: 50px;
  width: 100%;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.colors.red};
  background-color: rgba(255, 44, 40, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
const AuthMessage = styled.p``;

const AuthForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;
const AuthInputLabel = styled.label`
  width: 100%;
  position: relative;
  &:before {
    content: "";
    width: 2px;
    height: 28px;
    background-color: ${({ theme }) => theme.colors.gray};
    position: absolute;
    left: 70px;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    z-index: 9;
  }
`;

const AuthInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 30px;
  /* border-top-right-radius: 30px; */
  /* border-bottom-right-radius: 30px; */
  background-color: rgba(51, 100, 163, 0.1);
  /* background-color: transparent; */
  padding-left: 90px;
  background-image: url(${UserIcon});
  background-repeat: no-repeat;
  background-position: 30px;
  border: none;
  position: relative;
  transition: all 0.3s ease-in-out;
  outline: 2px solid transparent;
  font-family: ${({ theme }) => theme.fontFamily.font1}, sans-serif;
  &[type="text"] {
    background-size: 20px;
    background-image: url(${UserIcon});
    &:not(:focus):invalid {
      outline: 2px solid ${({ theme }) => theme.colors.red} !important;
      background-color: ${({ theme }) => theme.colors.white};
      transition: all 0.3s ease-in-out;
    }
  }
  &[type="email"] {
    background-size: 20px;
    background-image: url(${UserIcon});
    &:not(:focus):invalid {
      outline: 2px solid ${({ theme }) => theme.colors.red} !important;
      background-color: ${({ theme }) => theme.colors.white};
      transition: all 0.3s ease-in-out;
    }
  }
  &[type="password"] {
    background-size: 16px;
    background-image: url(${LockIcon});
  }
  &::placeholder {
    font-family: ${({ theme }) => theme.fontFamily.font1};
  }
  &:focus {
    transition: all 0.3s ease-in-out;
    outline: 2px solid ${({ theme }) => theme.colors.blue} !important;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const InputErorr = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  width: 100%;
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
  &:hover {
    transition: all 0.3s ease-in-out;
    color: ${({ theme }) => theme.colors.orange};
  }
`;
const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  padding: 6px 9px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.font2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 16px;
  text-transform: uppercase;
  border-radius: 40px;
  border: 2px solid transparent;
  transition: all 0.3s ease-in-out;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export default SignInForm;
