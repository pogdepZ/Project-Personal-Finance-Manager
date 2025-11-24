import * as yup from "yup"

export const schema = yup.object({
    amount: yup.number().required("Sao mà để trống được nhập đi bro").min(1, "0 đồng là sao hả a zai!!!!"),
    category: yup.string().required("Chọn danh mục nào đó đi !!!!!"),
    date: yup.string().required("Cho anh một cái hẹn đi"),
    note: yup.string().required("Nhập ghi chú đi bro")
})