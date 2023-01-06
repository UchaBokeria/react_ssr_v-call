import { useField } from "formik";
import styled from "styled-components";
const CustomSelect = (props) => {
  const [field, meta] = useField(props);
  return (
    <AuthSelectWrapper>
      <AuthSelect className={meta.touched && meta.error ? "error" : ""} {...field} {...props} />
      {/* {meta.touched && meta.error && <div className="error">{meta.error}</div>} */}
    </AuthSelectWrapper>
  );
};

const AuthSelectWrapper = styled.div`
  width: 130px;
  height: 50px;
  padding: 0 15px;
  border-radius: 30px;
  background-color: rgba(51, 100, 163, 0.1);
  display: flex;
  justify-content: center;
  outline: 2px solid transparent;
  align-items: center;
  &:focus {
    transition: all 0.3s ease-in-out;
    outline: 2px solid ${({ theme }) => theme.colors.blue} !important;
    background-color: ${({ theme }) => theme.colors.white};
  }
  &.error {
    outline: 2px solid ${({ theme }) => theme.colors.red} !important;
  }
`;

const AuthSelect = styled.select`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  transition: all 0.3s ease-in-out;
  outline: 2px solid transparent;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.font1}, sans-serif;
  &.error {
    outline: 2px solid ${({ theme }) => theme.colors.red} !important;
  }
`;

export default CustomSelect;
