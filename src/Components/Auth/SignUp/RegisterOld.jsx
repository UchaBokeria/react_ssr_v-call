import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Select from "react-select";
import DatePicker from "react-datepicker";
import {
  validEmail,
  strongPassword,
  mediumPassword,
} from "../../../Regex/Regex";
import PhoneCodes from "./PhoneCodes.json";
import UserIcon from "../../../Assets/images/Icons/user.svg";
import LockIcon from "../../../Assets/images/Icons/lock.svg";
import CalendarIcon from "../../../Assets/images/Icons/calendar.svg";
import EnvelopeIcon from "../../../Assets/images/Icons/envelope.svg";
import EyeIcon from "../../../Assets/images/Icons/eye.svg";

const SignupForm2 = () => {
  const [authType, setAuthType] = useState("physicalPerson");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");
  const [personalId, setPersonalId] = useState("");

  const [birthDate, setBirthDate] = useState("");

  const [phoneCode, setPhoneCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");

  const [termsChecked, setTermsChecked] = useState(false);

  const [organizationId, setOrganizationId] = useState("");

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  var message = [];

  const handlePasswordStrength = (password) => {
    if (strongPassword.test(password)) {
      setPasswordStrength("strong");
    } else if (mediumPassword.test(password)) {
      setPasswordStrength("medium");
    } else {
      setPasswordStrength("weak");
    }
  };

  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordVisibility(!passwordVisibility);
  };

  const handleChangeType = (type) => {
    setAuthType(type);
    clearInputs();
  };

  const handleRegister = (e) => {
    e.preventDefault();
    message.push(checkInput());
    console.log(message);
  };
  const clearInputs = () => {
    // setEmail("");
    // setPassword("");
    // setOrganizationId("");
    // setError(false);
    // setLoading(false);
  };

  //   const phoneCodes = [{ value: "+995", label: "+995" }];

  const checkInput = () => {
    const errors = {};
    if (firstName === "") {
      setError(true);
      errors.firstName = "სახელი ცარიელია";
    }
    if (lastName === "") {
      setError(true);
      errors.lastName = "გვარი ცარიელია";
    }
    if (email === "") {
      setError(true);
      errors.email = "ელ.ფოსტა ცარიელია";
    }
    if (!validEmail.test(email)) {
      setError(true);
      errors.email = "ელ.ფოსტა არასწორია";
    }
    if (birthDate === "") {
      setError(true);
      errors.birthDate = "დაბ.თარიღი ცარიელია";
    }
    if (phoneCode === "") {
      setError(true);
      errors.phoneCode = "ტელ.კოდი ცარიელია";
    }
    if (phoneNumber === "") {
      setError(true);
      errors.phoneNumber = "ტელ.ნომერი ცარიელია";
    }
    if (password === "") {
      setError(true);
      errors.password = "პაროლი ცარიელია";
    }
    if (confirmPassword === "") {
      setError(true);
      errors.confirmPassword = "გაიმეორეთ პაროლი";
    }
    if (password !== confirmPassword) {
      setError(true);
      errors.confirmPassword = "პაროლები არ ემთხვევა";
    }
    if (passwordStrength === "weak") {
      setError(true);
      errors.password = "პაროლი ძალიან სუსტია";
    }
    if (!termsChecked) {
      setError(true);
      errors.termsChecked = "გთხოვთ დაეთანხმოთ პირობებს";
    }
    return errors;
  };

  useEffect(() => {
    handlePasswordStrength(password);
  }, [password]);

  return (
    <StyledSignup>
      <StyledHeading>რეგისტრაცია</StyledHeading>
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
          {message.map((msg, index) => (
            <AuthMessage key={index}>{msg[0].birthDate}</AuthMessage>
          ))}
        </AuthMessageWrapper>
      )}
      {authType === "physicalPerson" ? (
        <AuthForm>
          <AuthInputLabel>
            <AuthInput
              placeholder="შეიყვანეთ სახელი"
              type="text"
              value={firstName}
              name="name"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <span>error</span>
          </AuthInputLabel>
          <AuthInputLabel>
            <AuthInput
              placeholder="შეიყვანეთ გვარი"
              type="text"
              value={lastName}
              name="lastname"
              onChange={(e) => setLastName(e.target.value)}
            />
          </AuthInputLabel>
          <AuthInputLabel>
            <AuthInput
              placeholder="შეიყვანეთ ელ.ფოსტა"
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </AuthInputLabel>
          <AuthInputLabel>
            <AuthInput
              placeholder="შეიყვანეთ პირადი ნომერი"
              type="text"
              value={personalId}
              name="id_number"
              onChange={(e) => setPersonalId(e.target.value)}
            />
          </AuthInputLabel>
          <AuthInputLabel>
            <StyledDatePicker
              selected={birthDate}
              onChange={(date) => setBirthDate(date)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date("01/01/1900")}
              maxDate={new Date()}
              calendarStartDay={1}
              showMonthDropdown
              showYearDropdown
              scrollableYearDropdown
              dropdownMode="select"
              placeholderText="დაბადების თარიღი"
              customInput={<AuthInput type="text" name="date" />}
            />
          </AuthInputLabel>
          {/* <AuthInputLabel>
            <AuthInput
              placeholder="დაბადების თარიღი"
              type="text"
              value={birthDate}
              name="date"
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </AuthInputLabel> */}
          <AuthInputLabel flex phone>
            <AuthSelect
              value={PhoneCodes.find((obj) => obj.value === phoneCode)}
              onChange={(e) => setPhoneCode(e.value)}
              options={PhoneCodes}
              isSearchable
              placeholder="+xxx"
            />
            <AuthInput
              placeholder="შეიყვანეთ ტელეფონი"
              type="text"
              value={phoneNumber}
              name="phone"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </AuthInputLabel>
          <AuthInputLabel password>
            <AuthInput
              placeholder="შეიყვანეთ პაროლი"
              type={passwordVisibility ? "text" : "password"}
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <PasswordVisibility
              isVisible={passwordVisibility}
              onClick={togglePassword}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_783_119)">
                  <path
                    className={passwordVisibility ? "active" : ""}
                    d="M8.99994 6.75049C7.75847 6.75049 6.74988 7.75905 6.74988 9.00048C6.74988 10.2419 7.75847 11.2494 8.99994 11.2494C10.2414 11.2494 11.2499 10.242 11.2499 9.00048C11.2499 7.75901 10.2414 6.75049 8.99994 6.75049Z"
                    fill="#B3B3B3"
                  />
                  <path
                    className={passwordVisibility ? "active" : ""}
                    d="M17.7673 8.31477C15.7956 5.75055 13.3704 3.37751 9.00545 3.37533H9.00489H9.00432C9.00432 3.37424 9.00102 3.37424 8.99993 3.37533C8.99993 3.37533 8.99719 3.37533 8.9961 3.37533C8.99554 3.37533 8.99554 3.37533 8.99554 3.37533H8.99497C8.99441 3.37533 8.99441 3.37533 8.99441 3.37533C4.62949 3.37754 2.20428 5.75059 0.232716 8.31477C-0.0775721 8.71907 -0.0775721 9.28157 0.232716 9.68586C2.20428 12.2501 4.62952 14.6231 8.99452 14.6253C8.99452 14.6253 8.99452 14.6253 8.99508 14.6253H8.99564C8.99564 14.6253 8.99564 14.6253 8.9962 14.6253H8.99677C8.99733 14.6253 9.00007 14.6253 9.00007 14.6253C9.00063 14.6253 9.00116 14.6253 9.00232 14.6253H9.00334H9.0039H9.00447H9.00503H9.00559C9.00942 14.6253 9.01329 14.6253 9.01768 14.6253C9.02264 14.6242 9.02756 14.6242 9.03252 14.6253C13.3799 14.6135 15.7996 12.2446 17.7674 9.68586C18.0775 9.28157 18.0775 8.71907 17.7673 8.31477ZM9.00327 12.3753H9.00264H9.00222H9.00158H9.00049H8.99997C8.99888 12.3753 8.99768 12.3753 8.99768 12.3753H8.99719C8.99719 12.3753 8.99719 12.3753 8.99663 12.3753C7.1376 12.3731 5.62487 10.8592 5.62487 9.00032C5.62487 7.14144 7.1376 5.6275 8.99663 5.62532C8.99764 5.62532 8.99937 5.62532 9.00158 5.62532H9.00323C10.8622 5.62754 12.3749 7.14144 12.3749 9.00032C12.3749 10.8592 10.8622 12.3731 9.00327 12.3753Z"
                    fill="#B3B3B3"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_783_119">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </PasswordVisibility>
          </AuthInputLabel>
          {password !== "" ? (
            <PasswordStrength strength={passwordStrength}>
              <PasswordStrengthBar
                className={
                  (passwordStrength === "weak" && "weak") ||
                  (passwordStrength === "medium" && "medium") ||
                  (passwordStrength === "strong" && "strong")
                }
              />
              <PasswordStrengthBar
                className={
                  (passwordStrength === "medium" && "medium") ||
                  (passwordStrength === "strong" && "strong")
                }
              />
              <PasswordStrengthBar
                className={passwordStrength === "strong" && "strong"}
              />
            </PasswordStrength>
          ) : (
            <></>
          )}
          <AuthInputLabel password>
            <AuthInput
              placeholder="გაიმეორეთ პაროლი"
              type={passwordVisibility ? "text" : "password"}
              value={confirmPassword}
              name="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <PasswordVisibility
              isVisible={passwordVisibility}
              onClick={togglePassword}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_783_119)">
                  <path
                    className={passwordVisibility ? "active" : ""}
                    d="M8.99994 6.75049C7.75847 6.75049 6.74988 7.75905 6.74988 9.00048C6.74988 10.2419 7.75847 11.2494 8.99994 11.2494C10.2414 11.2494 11.2499 10.242 11.2499 9.00048C11.2499 7.75901 10.2414 6.75049 8.99994 6.75049Z"
                    fill="#B3B3B3"
                  />
                  <path
                    className={passwordVisibility ? "active" : ""}
                    d="M17.7673 8.31477C15.7956 5.75055 13.3704 3.37751 9.00545 3.37533H9.00489H9.00432C9.00432 3.37424 9.00102 3.37424 8.99993 3.37533C8.99993 3.37533 8.99719 3.37533 8.9961 3.37533C8.99554 3.37533 8.99554 3.37533 8.99554 3.37533H8.99497C8.99441 3.37533 8.99441 3.37533 8.99441 3.37533C4.62949 3.37754 2.20428 5.75059 0.232716 8.31477C-0.0775721 8.71907 -0.0775721 9.28157 0.232716 9.68586C2.20428 12.2501 4.62952 14.6231 8.99452 14.6253C8.99452 14.6253 8.99452 14.6253 8.99508 14.6253H8.99564C8.99564 14.6253 8.99564 14.6253 8.9962 14.6253H8.99677C8.99733 14.6253 9.00007 14.6253 9.00007 14.6253C9.00063 14.6253 9.00116 14.6253 9.00232 14.6253H9.00334H9.0039H9.00447H9.00503H9.00559C9.00942 14.6253 9.01329 14.6253 9.01768 14.6253C9.02264 14.6242 9.02756 14.6242 9.03252 14.6253C13.3799 14.6135 15.7996 12.2446 17.7674 9.68586C18.0775 9.28157 18.0775 8.71907 17.7673 8.31477ZM9.00327 12.3753H9.00264H9.00222H9.00158H9.00049H8.99997C8.99888 12.3753 8.99768 12.3753 8.99768 12.3753H8.99719C8.99719 12.3753 8.99719 12.3753 8.99663 12.3753C7.1376 12.3731 5.62487 10.8592 5.62487 9.00032C5.62487 7.14144 7.1376 5.6275 8.99663 5.62532C8.99764 5.62532 8.99937 5.62532 9.00158 5.62532H9.00323C10.8622 5.62754 12.3749 7.14144 12.3749 9.00032C12.3749 10.8592 10.8622 12.3731 9.00327 12.3753Z"
                    fill="#B3B3B3"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_783_119">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </PasswordVisibility>
          </AuthInputLabel>
          {password !== confirmPassword ? (
            <AuthMessageWrapper>
              <AuthMessage>პაროლი არ ემთხვევა</AuthMessage>
            </AuthMessageWrapper>
          ) : (
            <></>
          )}
          <AuthInputLabel checkbox>
            <InputCheckbox
              type="checkbox"
              name="rules"
              checked={termsChecked}
              onChange={() => setTermsChecked(!termsChecked)}
            />
            <span>
              ვეთანხმები მომსახურების{" "}
              <StyledLink className="terms-conditions" to="/terms-conditions">
                წესებსა და პირობებს
              </StyledLink>
            </span>
          </AuthInputLabel>
        </AuthForm>
      ) : (
        <AuthForm>
          <AuthInputLabel>
            <AuthInput
              placeholder="საიდენტიფიკაციო ნომერი"
              type="text"
              value={organizationId}
              onChange={(e) => setOrganizationId(e.target.value)}
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
      <SubmitButton onClick={handleRegister}>
        რეგისტრაცია
        {loading && <span className="spinner-border spinner-border-sm"></span>}
      </SubmitButton>
      <LinkWrapper register>
        <span>უკვე გაქვს ანგარიში?</span>{" "}
        <StyledLink className="register" to="/signin">
          ავტორიზაცია
        </StyledLink>
      </LinkWrapper>
    </StyledSignup>
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

const AuthMessageWrapper = styled.div`
  min-height: 50px;
  width: 100%;
  padding: 15px 30px;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.colors.red};
  background-color: rgba(255, 44, 40, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
  flex-direction: column;
  gap: 10px;
`;
const AuthMessage = styled.p`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  &:before {
    content: "•";
  }
`;

const AuthForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

const AuthFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 20px;
  ${(props) =>
    props.password &&
    `
      flex-direction: column;
    `}
`;

const AuthInputLabel = styled.label`
  width: 100%;
  position: relative;
  ${(props) =>
    (props.flex &&
      `
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  `) ||
    (props.password &&
      `
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `)}
  ${(props) =>
    props.phone &&
    `
&:before {
        left: 160px !important;
    }
`}
  ${(props) =>
    props.checkbox &&
    `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    &:before {
      content: none !important;
    }
  `}
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
    z-index: 1;
  }
  span {
    font-size: 14px;
    font-family: ${({ theme }) => theme.fontFamily.font1};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.black};
  }
  .react-datepicker__input-container {
    input {
      background-image: url(${CalendarIcon});
    }
  }
  .react-datepicker-popper {
    z-index: 2;
  }
  .react-datepicker {
    .react-datepicker__header {
      background-color: ${({ theme }) => theme.colors.orange};
      border: none;
      .react-datepicker__current-month {
        color: ${({ theme }) => theme.colors.white};
        font-family: ${({ theme }) => theme.fontFamily.font1};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        font-size: 14px;
        margin-bottom: 15px;
      }
      .react-datepicker__day-name {
        color: ${({ theme }) => theme.colors.white};
        font-family: ${({ theme }) => theme.fontFamily.font1};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
      }
    }
    .react-datepicker__triangle {
      display: none;
    }
    .react-datepicker__navigation {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: transparent;
      &:hover {
        transition: all 0.3s ease-in-out;
        background-color: rgba(51, 100, 163, 0.1);
        cursor: pointer;
      }
      &:focus {
        outline: none;
      }
      span {
        color: ${({ theme }) => theme.colors.white};
        &:before {
          border-color: ${({ theme }) => theme.colors.white};
        }
      }
    }
  }
`;

const StyledDatePicker = styled(DatePicker)``;

const AuthSelect = styled(Select)`
  width: 110px;
  height: 50px;
  border-radius: 30px;
  border: none;
  background-color: rgba(51, 100, 163, 0.1);
  transition: all 0.3s ease-in-out;
  outline: 2px solid transparent;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.font1}, sans-serif;
  .css-1s2u09g-control {
    border: none;
    box-shadow: none;
    width: 110px;
    height: 50px;
    border-radius: 30px;
    background-color: transparent;
    outline: 2px solid transparent !important;
    box-shadow: none;
    padding: 0 20px;
    .css-319lph-ValueContainer {
      padding: 0;
    }
    .css-14el2xx-placeholder {
      font-size: 16px;
      color: ${({ theme }) => theme.colors.gray};
      font-family: ${({ theme }) => theme.fontFamily.font1}, sans-serif;
    }
    &:focus {
      transition: all 0.3s ease-in-out;
      outline: 2px solid ${({ theme }) => theme.colors.blue} !important;
      background-color: ${({ theme }) => theme.colors.white};
    }
    .css-1okebmr-indicatorSeparator {
      display: none;
    }
    .css-tlfecz-indicatorContainer {
      padding: 0;
    }
  }
  .css-1pahdxg-control {
    border: none;
    box-shadow: none;
    width: 110px;
    height: 50px;
    border-radius: 30px;
    transition: all 0.3s ease-in-out;
    outline: 2px solid ${({ theme }) => theme.colors.blue} !important;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 0 20px;
    .css-1okebmr-indicatorSeparator {
      display: none;
    }
    &:focus {
      transition: all 0.3s ease-in-out;
      outline: 2px solid ${({ theme }) => theme.colors.blue} !important;
      background-color: ${({ theme }) => theme.colors.white};
    }
    .css-1gtu0rj-indicatorContainer {
      padding: 0;
    }
    .css-319lph-ValueContainer {
      padding: 0;
    }
  }
  .css-26l3qy-menu {
    z-index: 2;
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
  padding: 0 30px 0 90px;
  background-repeat: no-repeat;
  background-position: 30px;
  border: none;
  position: relative;
  transition: all 0.3s ease-in-out;
  outline: 2px solid transparent;
  font-family: ${({ theme }) => theme.fontFamily.font1}, sans-serif;
  font-size: 14px;
  &[type="text"] {
    background-size: 20px;
    &:not(:focus):invalid {
      outline: 2px solid ${({ theme }) => theme.colors.red} !important;
      background-color: ${({ theme }) => theme.colors.white};
      transition: all 0.3s ease-in-out;
    }
  }
  &[type="email"] {
    background-size: 20px;
    &:not(:focus):invalid {
      outline: 2px solid ${({ theme }) => theme.colors.red} !important;
      background-color: ${({ theme }) => theme.colors.white};
      transition: all 0.3s ease-in-out;
    }
  }
  &[name="password"] {
    background-image: url(${LockIcon});
    background-size: 16px;
    padding: 0 55px 0 90px;
  }

  &[name="name"] {
    background-image: url(${UserIcon});
  }
  &[name="lastname"] {
    background-image: url(${UserIcon});
  }
  &[name="date"] {
    background-image: url(${CalendarIcon});
  }
  &[name="email"] {
    background-image: url(${EnvelopeIcon});
  }
  &[name="id_number"] {
    background-image: url(${UserIcon});
  }
  &[name="phone"] {
    background-image: none;
    padding-left: 50px;
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

const InputCheckbox = styled.input`
  /* Add if not using autoprefixer */
  -webkit-appearance: none;
  /* Remove most all native input styles */
  appearance: none;
  /* For iOS < 15 */
  background-color: ${({ theme }) => theme.colors.white};
  /* Not removed via appearance */
  margin: 0;
  /* font-family: inherit; */
  color: ${({ theme }) => theme.colors.gray};
  width: 22px;
  height: 22px;
  border: 0.5px solid currentColor;
  border-radius: 0.15em;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  &::before {
    content: "";
    width: 15px;
    height: 15px;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em ${({ theme }) => theme.colors.orange};
    display: block;
    /* Windows High Contrast Mode */
  }
  &:checked {
    &::before {
      transform: scale(1);
      display: block;
    }
  }
`;

const PasswordVisibility = styled.button`
  width: 35px;
  height: 35px;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:focus {
    outline: none;
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: rgba(51, 100, 163, 0.1);
    cursor: pointer;
  }
  /* ${(props) =>
    props.visible &&
    `
      svg {
        path {
          fill: ${({ theme }) => theme.colors.blue} !important;
        }
      }
      `} */
  svg {
    width: 100%;
    .active {
      fill: ${({ theme }) => theme.colors.blue} !important;
    }
  }
`;

const PasswordStrength = styled.div`
  width: 100%;
  height: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const PasswordStrengthBar = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.gray};
  &.weak {
    background-color: ${({ theme }) => theme.colors.red};
  }
  &.medium {
    background-color: #ffc107;
  }
  &.strong {
    background-color: #00ff00;
  }

  /* ${(props) =>
    (props.strength === "strong" && `background-color: #00ff00;`) ||
    (props.strength === "medium" && `background-color: #ff7700;`) ||
    `background-color: ${props.theme.colors.red}`}; */
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

export default SignupForm2;
