import { useField } from "formik";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CustomCheckbox = (props) => {
  const [field, meta] = useField(props);

  return (
    <AuthInputWrapper>
      <AuthInputLabel>
        <Checkbox {...field} {...props} />
        <span>
          ვეთანხმები წესებსა და პირობებს{" "}
          <StyledLink className="terms-conditions" to="/terms-conditions">
            წესებსა და პირობებს
          </StyledLink>
        </span>
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
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  &:before {
    content: none !important;
  }
  span {
    font-size: 14px;
    font-family: ${({ theme }) => theme.fontFamily.font1};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.black};
  }
`;

const Checkbox = styled.input`
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

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.red};
  display: inline-block;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.font2};
  line-height: 1.6;
  margin: 10px 0 0 42px;
`;

export default CustomCheckbox;
