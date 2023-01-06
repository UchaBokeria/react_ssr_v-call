import * as yup from "yup";

export const profileSchema = yup.object().shape({
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
  phoneCode: yup.string(),
  phone: yup
    .number()
    .typeError("გთხოვთ მიუთითოთ სწორი ტელეფონის ნომერი")
    .required("გთხოვთ შეავსოთ ველი"),
});
