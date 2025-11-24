import * as yup from "yup";
export const schema = yup.object({
    fullName: yup.string().required("Định không có tên à anh zai"),
    email: yup
    .string()
    .email("Email must be a valid email")
    .required("Bắt buộc phải nhập trường này bạn eiiiii"),
  password: yup.string().required("Đăng ký mà không có mật khẩu là ẩu đó ba").min(8, "Không thấy yêu cầu 8 kí tự hảaa")
});