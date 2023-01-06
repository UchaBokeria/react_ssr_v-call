import { useField } from "formik";
import styled from "styled-components";

import EnvelopeIcon from "../../../../Assets/images/Icons/envelope.svg";

const CustomInput = (props) => {
  const [field, meta] = useField(props);

  return (
    <AuthInputWrapper>
      <AuthInputLabel>
        <AuthInput
          className={meta.touched && meta.error ? "error" : ""}
          {...field}
          {...props}
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
  &[name="email"] {
    background-image: url(${EnvelopeIcon}) !important;
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
