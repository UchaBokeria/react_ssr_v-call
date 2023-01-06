import { useField } from "formik";
import styled from "styled-components";

const CustomInput = (props) => {
  const [field, meta] = useField(props);

  console.log(field);

  return (
    <AuthInputWrapper>
      {props.title && <AuthInputTitle>{props.title}</AuthInputTitle>}
      <AuthInputLabel>
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

const AuthInputTitle = styled.h3`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.lightGray};
  margin-bottom: 16px;
`

const AuthInputLabel = styled.label`
  width: 100%;
  position: relative;
`;

const AuthInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 30px;
  background-color: rgba(51, 100, 163, 0.1);
  padding: 0 30px ;
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
    &:not(:focus):invalid {
      outline: 2px solid ${({ theme }) => theme.colors.red} !important;
      background-color: ${({ theme }) => theme.colors.white};
      transition: all 0.3s ease-in-out;
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
