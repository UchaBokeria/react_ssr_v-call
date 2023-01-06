import { Formik, Form } from "formik";
import styled from "styled-components";
import { physicalSchema } from "../schema";
import CustomButton from "./Components/CustomButton";
import CustomCalendar from "./Components/CustomCalendar";
import CustomCheckbox from "./Components/CustomCheckbox";
import CustomInput from "./Components/CustomInput";
import CustomPassword from "./Components/CustomPassword";
import CustomSelect from "./Components/CustomSelect";
import PhoneCodes from "./PhoneCodes.json";

const PhysicalForm = () => {
  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
        personalId: "",
        birthday: "",
        password: "",
        confirmPassword: "",
        phoneCode: "",
        phone: "",
        acceptedTerms: false,
      }}
      validationSchema={physicalSchema}
      onSubmit={onSubmit}
    >
      {(props) => (
        <AuthForm>
          <CustomInput name="firstname" type="text" placeholder="სახელი" />
          <CustomInput name="lastname" type="text" placeholder="გვარი" />
          <CustomInput name="email" type="email" placeholder="ელ.ფოსტა" />
          <CustomInput
            name="personalId"
            type="text"
            placeholder="პირადი ნომერი"
          />
          <CustomCalendar
            name="birthday"
            type="text"
            placeholder="დაბ. თარიღი"
          />
          <CustomPassword name="password" type="password" placeholder="პაროლი" />
          <CustomPassword
            name="confirmPassword"
            type="password"
            placeholder="გაიმეორეთ პაროლი"
          />
          <PhoneFlexbox>
            <CustomSelect name="phonecode" placeholder="+xxx">
              {PhoneCodes.map((phonecode) => {
                return (
                  <option value={phonecode.value} key={phonecode.countryCode}>
                    {phonecode.value}
                  </option>
                );
              })}
            </CustomSelect>
            <CustomInput
              name="phone"
              phone
              type="text"
              placeholder="ტელეფონი"
            />
          </PhoneFlexbox>
          <CustomCheckbox type="checkbox" name="acceptedTerms" />
          <CustomButton isSubmitting={props.isSubmitting}>
            რეგისტრაცია{" "}
            {props.isSubmitting && (
              <span className="spinner-border spinner-border-sm"></span>
            )}
          </CustomButton>
        </AuthForm>
      )}
    </Formik>
  );
};

const AuthForm = styled(Form)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

const PhoneFlexbox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  position: relative;
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

export default PhysicalForm;
