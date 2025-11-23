import * as yup from "yup";
export const schema = yup.object({
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Bắt buộc phải nhập trường này bạn eiiiii"),
  password: yup.string().required("Không có password sao mà vào hảaaaa"),
});