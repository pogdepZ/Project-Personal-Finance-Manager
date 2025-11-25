import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { saveBudget } from "./budgetSlice";

const schema = yup.object().shape({
  month: yup.string().required("Vui lòng chọn tháng áp dụng"),
  category: yup.string().required("Vui lòng chọn danh mục"),
  limit: yup
    .number()
    .typeError("Vui lòng nhập số tiền hợp lệ")
    .positive("Số tiền phải lớn hơn 0")
    .required("Vui lòng nhập hạn mức chi tiêu"),
  alertRange: yup.number().min(50).max(100),
  isRepeat: yup.boolean(),
});

export default function ModalBudget({ isShowModal, setShowModal }) {
  const categories = useSelector((state) => state.categories.list);
  const listNameCate = categories?.map((item) => item.name);
  const modalRef = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      month: new Date().toISOString().slice(0, 7),
      category: "",
      limit: "",
      alertRange: 80,
      isRepeat: true,
    },
  });

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(
      saveBudget({
        monthStr: data.month,
        category: data.category,
        limit: data.limit,
      })
    );
    setShowModal(false);
    reset();
  };

  useEffect(() => {
    if (!isShowModal) return;

    const handleMouseDown = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShowModal(false);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("mousedown", handleMouseDown);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      document.body.style.overflow = "unset";
    };
  }, [isShowModal, setShowModal]);

  return (
    <>
      {isShowModal && (
        <>
          <div className="fixed z-10 inset-0 bg-black/50 flex items-center justify-center">
            <div
              ref={modalRef}
              className="fixed left-1/2 top-1/2 mt-5 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all scale-100"
            >
              <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Thiết lập ngân sách
                  </h3>
                  <p className="text-xs text-gray-500">
                    Giới hạn chi tiêu cho danh mục
                  </p>
                </div>
                <button
                  className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="month"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Tháng áp dụng
                      </label>
                      <input
                        type="month"
                        id="month"
                        {...register("month")}
                        className={`block w-full px-3 py-2.5 border rounded-lg shadow-sm sm:text-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 ${
                          errors.month ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.month && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.month.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="category"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Danh mục
                      </label>
                      <select
                        id="category"
                        {...register("category")}
                        className={`block w-full pl-3 pr-10 py-2.5 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg border bg-white ${
                          errors.category ? "border-red-500" : "border-gray-300"
                        }`}
                      >
                        <option value="">Chọn danh mục</option>
                        {listNameCate &&
                          listNameCate.map((item, index) => (
                            <option key={index} value={item}>
                              {item}
                            </option>
                          ))}
                      </select>
                      {errors.category && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.category.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="limit"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Hạn mức chi tiêu
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-lg font-bold">
                          ₫
                        </span>
                      </div>
                      <input
                        type="number"
                        id="limit"
                        placeholder="0"
                        {...register("limit")}
                        className={`block w-full pl-8 pr-12 py-4 text-xl font-bold rounded-lg border placeholder-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 ${
                          errors.limit ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-gray-400 sm:text-sm">VND</span>
                      </div>
                    </div>
                    {errors.limit && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.limit.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-2 flex items-center space-x-4">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="flex-1 bg-white py-3 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                    >
                      Hủy bỏ
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-indigo-600 py-3 px-4 border border-transparent rounded-lg text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg shadow-indigo-500/30 transition-all hover:-translate-y-0.5"
                    >
                      Lưu ngân sách
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
