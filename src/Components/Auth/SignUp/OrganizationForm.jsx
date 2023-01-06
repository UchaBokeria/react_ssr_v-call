import { Formik, Form } from "formik";
import styled from "styled-components";
import { organizationSchema } from "../schema";
import CustomButton from "./Components/CustomButton";
import CustomCalendar from "./Components/CustomCalendar";
import CustomCheckbox from "./Components/CustomCheckbox";
import CustomInput from "./Components/CustomInput";
import CustomSelect from "./Components/CustomSelect";
import PhoneCodes from "./PhoneCodes.json";

const OrganizationForm = () => {
  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <Formik
      initialValues={{
        identifyId: "",
        organizationName: "",
        legalAddress: "",
        actualAddress: "",
        firstContactName: "",
        firstContactLastname: "",
        firstContactId: "",
        firstContactPhoneCode: "",
        firstContactPhone: "",
        secondContactName: "",
        secondContactLastname: "",
        secondContactId: "",
        secondContactPhoneCode: "",
        secondContactPhone: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptedTerms: false,
      }}
      validationSchema={organizationSchema}
      onSubmit={onSubmit}
    >
      {(props) => (
        <AuthForm>
          <CustomInput
            name="identifyId"
            type="text"
            placeholder="საიდენტიფიკაციო ნომერი"
          />
          <CustomInput name="organizationName" type="text" placeholder="დასახელება" />
          <CustomInput
            name="legalAddress"
            type="text"
            placeholder="იურიდიული მისამართი"
          />
          <CustomInput
            name="actualAddress"
            type="text"
            placeholder="ფაქტობრივი მისამართი"
          />
          <CustomInput
            name="firstContactName"
            type="text"
            placeholder="საკონტაქტო პირის სახელი"
          />
          <CustomInput
            name="firstContactLastname"
            type="text"
            placeholder="საკონტაქტო პირის გვარი"
          />
          <CustomInput
            name="firstContactId"
            type="text"
            placeholder="საკონტაქტო პირადი ნომერი"
          />
          <PhoneFlexbox>
            <CustomSelect name="firstContactPhoneCode" placeholder="+xxx">
              {PhoneCodes.map((phonecode) => {
                return (
                  <option value={phonecode.value} key={phonecode.countryCode}>
                    {phonecode.value}
                  </option>
                );
              })}
            </CustomSelect>
            <CustomInput
              name="firstContactPhone"
              phone
              type="text"
              placeholder="საკონტაქტო პირის ტელეფონი"
            />
          </PhoneFlexbox>
          <CustomInput
            name="secondContactName"
            type="text"
            placeholder="მეორე საკონტაქტო პირის სახელი"
          />
          <CustomInput
            name="secondContactLastname"
            type="text"
            placeholder="მეორე საკონტაქტო პირის გვარი"
          />
          <CustomInput
            name="secondContactId"
            type="text"
            placeholder="მეორე საკონტაქტო პირადი ნომერი"
          />
          <PhoneFlexbox>
            <CustomSelect name="secondContactPhoneCode" placeholder="+xxx">
              {PhoneCodes.map((phonecode) => {
                return (
                  <option value={phonecode.value} key={phonecode.countryCode}>
                    {phonecode.value}
                  </option>
                );
              })}
            </CustomSelect>
            <CustomInput
              name="secondContactPhone"
              phone
              type="text"
              placeholder="მეორე საკონტაქტო პირის ტელეფონი"
            />
          </PhoneFlexbox>

          <CustomInput name="email" type="email" placeholder="ელ.ფოსტა" />

          <CustomInput name="password" type="password" placeholder="პაროლი" />
          <CustomInput
            name="confirmPassword"
            type="password"
            placeholder="გაიმეორეთ პაროლი"
          />

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

export default OrganizationForm;
