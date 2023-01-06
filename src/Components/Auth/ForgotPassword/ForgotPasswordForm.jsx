import { Formik, Form } from "formik";
import styled from "styled-components";
import { forgotPasswordSchema } from "../schema";
import CustomButton from "./Components/CustomButton";
import CustomInput from "./Components/CustomInput";

const ForgotPasswordForm = () => {
  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={forgotPasswordSchema}
      onSubmit={onSubmit}
    >
      {(props) => (
        <AuthForm>
          <CustomInput
            name="email"
            type="email"
            placeholder="შეიყვანეთ ელ.ფოსტა"
          />
          <CustomButton isSubmitting={props.isSubmitting}>
            პაროლის აღდგენა{" "}
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

export default ForgotPasswordForm;
