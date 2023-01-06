import { useField } from "formik";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import CalendarIcon from "../../../../Assets/images/Icons/calendar.svg";

const CustomCalendar = (props) => {
  const [field, meta, helpers] = useField(props);

//   console.log({...field});
  return (
    <AuthInputWrapper>
      {props.title && <AuthInputTitle>{props.title}</AuthInputTitle>}
      <AuthInputLabel>
        <StyledDatePicker
          selected={field.value}
          onChange={helpers.setValue}
          dateFormat="dd/MM/yyyy"
          minDate={new Date("01/01/1900")}
          maxDate={new Date()}
          calendarStartDay={1}
          showMonthDropdown
          showYearDropdown
          scrollableYearDropdown
          dropdownMode="select"
          placeholderText="დაბადების თარიღი"
          onBlur={field.onBlur}
          name={field.name}
        //   {...props}
        // {...field}
          customInput={
            <AuthInput
              name="birthday"
              className={meta.touched && meta.error ? "error" : ""}
              {...field}
              {...props}
            />
          }
        />
      </AuthInputLabel>
      {meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
    </AuthInputWrapper>
  );
};

const StyledDatePicker = styled(DatePicker)``;

const AuthInputWrapper = styled.div`
  width: 100%;
`;

const AuthInputTitle = styled.h3`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 25px;
`

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
    }
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
  background-image: url(${CalendarIcon});
  background-repeat: no-repeat;
  background-position: 30px;
  background-size: 20px;
  border: none;
  position: relative;
  transition: all 0.3s ease-in-out;
  outline: 2px solid transparent;
  font-family: ${({ theme }) => theme.fontFamily.font1}, sans-serif;
  font-size: 14px;
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

export default CustomCalendar;
