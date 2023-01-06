import { Formik, Form } from "formik";
import styled from "styled-components";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

const CardForm = ({ closeModal }) => {
  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <Formik
      initialValues={{
        cardHolder: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
      }}
    >
      {(props) => (
        <StyledCardForm>
          <CustomInput
            name="cardHolder"
            type="text"
            placeholder="CARDHOLDER NAME"
            title="ბარათის მფლობელი"
          />
          <CustomInput
            name="cardNumber"
            type="text"
            placeholder="•••• •••• •••• ••••"
            title="ბარათის ნომერი"
          />
          <FlexBox>
            <FlexBox column>
              <AuthInputTitle>ბარათის ვადა</AuthInputTitle>
              <FlexBox>
                <CustomInput
                  name="expirationDate"
                  type="text"
                  placeholder="თვე"
                />
                <CustomInput
                  name="expirationDate"
                  type="text"
                  placeholder="წელი"
                />
              </FlexBox>
            </FlexBox>
            <CustomInput
              name="cvv"
              type="text"
              placeholder="CVC / CVV"
              title="CVC / CVV"
            />
          </FlexBox>
          <CustomButton isSubmitting={props.isSubmitting}>
            შენახვა{" "}
            {props.isSubmitting && (
              <span className="spinner-border spinner-border-sm"></span>
            )}
          </CustomButton>
        </StyledCardForm>
      )}
    </Formik>
  );
};

const StyledCardForm = styled(Form)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px;
  width: 100%;
  ${(props) =>
    props.column &&
    `flex-direction: column;
  gap: 0;`}
  @media only screen and (max-width: 498.98px) {
    flex-direction: column;
  }
`;

const AuthInputTitle = styled.h3`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 16px;
`;

export default CardForm;
