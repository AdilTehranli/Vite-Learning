import * as yup from "yup";

export const RegisterFormShemas = yup.object().shape({
  email: yup
    .string()
    .email("This is not Email please correct write email")
    .required("Required email"),
  age: yup
    .number()
    .positive("Pozitive value write")
    .integer("Write Only int value")
    .required("Required age"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Required password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'),yup.password],"Password not a like ")
    .required("Required Confirm password"),
  term: yup.boolean().required("Please choose term"),
});
