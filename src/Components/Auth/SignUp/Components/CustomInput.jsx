import { useField } from "formik";
import styled from "styled-components";

import UserIcon from "../../../../Assets/images/Icons/user.svg";
import LockIcon from "../../../../Assets/images/Icons/lock.svg";
import CalendarIcon from "../../../../Assets/images/Icons/calendar.svg";
import EnvelopeIcon from "../../../../Assets/images/Icons/envelope.svg";
import HashtagIcon from "../../../../Assets/images/Icons/hashtag.svg";
import IdCardIcon from "../../../../Assets/images/Icons/id-card.svg";
import LocationIcon from "../../../../Assets/images/Icons/location.svg";

const CustomInput = (props) => {
  const [field, meta] = useField(props);

  return (
    <AuthInputWrapper>
      <AuthInputLabel phone={props.phone}>
        <AuthInput
          className={meta.touched && meta.error ? "error" : ""}
          {...field}
          {...props}
          autocomplete="new-password"
        />
      </AuthInputLabel>
      {meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
    </AuthInputWrapper>
  );
};

const AuthInputWrapper = styled.div`
  width: 100%;
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
        left: 30px !important;
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
  &:-internal-autofill-selected {
    background-color: unset !important;
    appearance: unset;
    color: unset;
    background-image: unset;
  }

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
    background-image: url(${LockIcon}) !important;
    background-size: 16px;
    padding: 0 55px 0 90px;
  }
  &[name="confirmPassword"] {
    background-image: url(${LockIcon}) !important;
    background-size: 16px;
    padding: 0 55px 0 90px;
  }

  &[name="firstname"] {
    background-image: url(${UserIcon}) !important;
  }
  &[name="lastname"] {
    background-image: url(${UserIcon}) !important;
  }
  &[name="birthday"] {
    background-image: url(${CalendarIcon}) !important;
  }
  &[name="email"] {
    background-image: url(${EnvelopeIcon}) !important;
  }
  &[name="personalId"] {
    background-image: url(${UserIcon}) !important;
  }
  &[name="phone"] {
    /* background-image: none; */
    /* background-image: url(${UserIcon}) !important; */

    padding-left: 50px;
  }
  &[name="identifyId"] {
    background-image: url(${HashtagIcon}) !important;
  }
  &[name="organizationName"] {
    background-image: url(${IdCardIcon}) !important;
  }
  &[name="legalAddress"],
  &[name="actualAddress"] {
    background-image: url(${LocationIcon}) !important;
    background-size: 16px;
  }
  &[name="firstContactName"],
  &[name="firstContactLastname"],
  &[name="firstContactId"],
  &[name="secondContactName"],
  &[name="secondContactLastname"],
  &[name="secondContactId"] {
    background-image: url(${UserIcon}) !important;
  }
  &[name="firstContactPhone"], &[name="secondContactPhone"] {
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
  &.error {
    outline: 2px solid ${({ theme }) => theme.colors.red} !important;
  }
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.red};
  display: inline-block;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.font2};
  line-height: 1.6;
  margin: 10px 0 0 30px;
`;

export default CustomInput;
