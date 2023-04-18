import * as yup from "yup";

export const schema = yup.object().shape({
  firstname: yup.string().required("required").trim().min(3).max(32),
  lastname: yup.string().required("required").trim().min(3).max(32),
  email: yup.string().email().required("required").trim(),
  message: yup.string().required("required").trim().min(10).max(200),
});
