import * as yup from "yup";
import { strongPassword } from "../../../Regex/Regex";

export const physicalSchema = yup.object().shape({
  firstname: yup.string().required("გთხოვთ შეავსოთ ველი"),
  lastname: yup.string().required("გთხოვთ შეავსოთ ველი"),
  email: yup
    .string()
    .email("გთხოვთ სწორად მიუთითოთ ელ.ფოსტა")
    .required("გთხოვთ შეავსოთ ველი"),
  personalId: yup
    .string()
    .matches(/^[0-9]{1,}$/, {
      message: "გთხოვთ მიუთითოთ სწორი პირადი ნომერი",
    })
    .required("გთხოვთ შეავსოთ ველი"),
  birthday: yup.mixed().required("გთხოვთ შეავსოთ ველი"),
  password: yup
    .string()
    .min(8, "პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს")
    .max(20, "პაროლი უნდა შეიცავდეს  მაქსიმუმ 20 სიმბოლოს")
    .matches(strongPassword, {
      message:
        "პაროლი უნდა შეიცავდეს 8-20 სიმბოლოს, მინიმუმ ერთ პატარა და ერთ დიდ ასოს, მინიმუმ ერთ სიმბოლოს",
    })
    .required("გთხოვთ შეავსოთ ველი"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "პაროლები არ ემთხვევა")
    .required("გთხოვთ შეავსოთ ველი"),
  phoneCode: yup.string(),
  phone: yup
    .number()
    .typeError("გთხოვთ მიუთითოთ სწორი ტელეფონის ნომერი")
    .required("გთხოვთ შეავსოთ ველი"),
  acceptedTerms: yup
    .boolean()
    .oneOf([true], "გთხოვთ დაეთანხმოთ წესებსა და პირობებს")
    .required("გთხოვთ დაეთანხმოთ წესებსა და პირობებს"),
});

export const organizationSchema = yup.object().shape({
  identifyId: yup.string().required("გთხოვთ შეავსოთ ველი"),
  organizationName: yup.string().required("გთხოვთ შეავსოთ ველი"),
  legalAddress: yup.string().required("გთხოვთ შეავსოთ ველი"),
  actualAddress: yup.string().required("გთხოვთ შეავსოთ ველი"),
  firstContactName: yup.string().required("გთხოვთ შეავსოთ ველი"),
  firstContactLastname: yup.string().required("გთხოვთ შეავსოთ ველი"),
  firstContactId: yup
  .string()
  .matches(/^[0-9]{1,}$/, {
    message: "გთხოვთ მიუთითოთ სწორი პირადი ნომერი",
  })
  .required("გთხოვთ შეავსოთ ველი"),
  firstContactPhoneCode: yup.string(),
  firstContactPhone: yup
    .number()
    .typeError("გთხოვთ მიუთითოთ სწორი ტელეფონის ნომერი")
    .required("გთხოვთ შეავსოთ ველი"),
  secondContactName: yup.string().required("გთხოვთ შეავსოთ ველი"),
  secondContactLastname: yup.string().required("გთხოვთ შეავსოთ ველი"),
  secondContactId: yup
  .string()
  .matches(/^[0-9]{1,}$/, {
    message: "გთხოვთ მიუთითოთ სწორი პირადი ნომერი",
  })
  .required("გთხოვთ შეავსოთ ველი"),
  secondContactPhoneCode: yup.string().required("გთხოვთ შეავსოთ ველი"),
  secondContactPhone: yup
    .number()
    .typeError("გთხოვთ მიუთითოთ სწორი ტელეფონის ნომერი")
    .required("გთხოვთ შეავსოთ ველი"),
  email: yup
    .string()
    .email("გთხოვთ სწორად მიუთითოთ ელ.ფოსტა")
    .required("გთხოვთ შეავსოთ ველი"),
  password: yup
    .string()
    .min(8, "პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს")
    .max(20, "პაროლი უნდა შეიცავდეს  მაქსიმუმ 20 სიმბოლოს")
    .matches(strongPassword, {
      message:
        "პაროლი უნდა შეიცავდეს 8-20 სიმბოლოს, მინიმუმ ერთ პატარა და ერთ დიდ ასოს, მინიმუმ ერთ სიმბოლოს",
    })
    .required("გთხოვთ შეავსოთ ველი"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "პაროლები არ ემთხვევა")
    .required("გთხოვთ შეავსოთ ველი"),
  acceptedTerms: yup
    .boolean()
    .oneOf([true], "გთხოვთ დაეთანხმოთ წესებსა და პირობებს")
    .required("გთხოვთ დაეთანხმოთ წესებსა და პირობებს"),
});

export const forgotPasswordSchema = yup.object().shape({
  email: yup.string().email("გთხოვთ სწორად მიუთითოთ ელ.ფოსტა").required(""),
})
