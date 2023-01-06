import { Formik, Form } from "formik";
import styled from "styled-components";
import CustomInput from "./Components/CustomInput";
import CustomCalendar from "./Components/CustomCalendar";
import CustomSelect from "./Components/CustomSelect";
import CustomButton from "./Components/CustomButton";
import PhoneCodes from "../../Auth/SignUp/PhoneCodes.json";
import { profileSchema } from "../Schema";
const Profile = () => {
  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <ComponentContainer>
      <ComponentTitle>მომხმარებელი</ComponentTitle>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          personalId: "",
          birthday: "",
          phoneCode: "",
          phone: "",
        }}
        onSubmit={onSubmit}
        validationSchema={profileSchema}
      >
        {(props) => (
          <ProfileForm>
            <CustomInput
              name="firstname"
              type="text"
              placeholder="სახელი"
              title="სახელი"
            />
            <CustomInput
              name="lastname"
              type="text"
              placeholder="გვარი"
              title="გვარი"
            />
            <CustomInput
              name="email"
              type="email"
              placeholder="ელ.ფოსტა"
              title="ელ.ფოსტა"
            />
            <CustomInput
              name="personalId"
              type="text"
              placeholder="პირადი ნომერი"
              title="პირადი ნომერი"
            />
            <CustomCalendar
              name="birthday"
              type="text"
              placeholder="დაბ. თარიღი"
              title="დაბადების თარიღი"
            />
            <PhoneWrapper>
              <AuthInputTitle>ტელეფონი</AuthInputTitle>
              <PhoneFlexbox>
                <CustomSelect name="phonecode" placeholder="+xxx">
                  {PhoneCodes.map((phonecode) => {
                    return (
                      <option
                        value={phonecode.value}
                        key={phonecode.countryCode}
                      >
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
            </PhoneWrapper>
            <CustomButton isSubmitting={props.isSubmitting}>
              შენახვა{" "}
              {props.isSubmitting && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
            </CustomButton>
          </ProfileForm>
        )}
      </Formik>
    </ComponentContainer>
  );
};

const ComponentContainer = styled.div`
  padding: 0 70px;
  width: 100%;
  max-width: 570px;
  border-left: 1px solid rgba(51, 100, 163, 0.3);
`;

const ComponentTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 50px;
`;

const ProfileForm = styled(Form)`
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

const PhoneWrapper = styled.div`
  width: 100%;
`;
const AuthInputTitle = styled.h3`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 25px;
`;
export default Profile;
