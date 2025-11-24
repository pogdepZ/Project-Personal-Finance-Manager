import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {schema} from "./schemaTransaction"
import { useDispatch } from "react-redux";
import { createThunk } from "../Transactions/transactionSlice";

export default function Modal({ isShowModal, setShowModal }) {
  const modalRef = useRef(null);

  const dispatch = useDispatch()
  const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)})
  const [type, setType] = useState("income");
  useEffect(() => {
    if (!isShowModal) return;

    const handleKeyDown = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShowModal(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("mousedown", handleKeyDown);
    return () => {
      window.removeEventListener("mousedown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isShowModal]);

  const onSubmit = async (data)=>{
    const isCreate = await dispatch(createThunk({...data, type: type}))
    setShowModal(false)
  }
  return (
    <>
      {isShowModal && (
        <>
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center ">
            <div className=" h-[700px] mt-[120px] w-[500px]" ref={modalRef}>
              <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all scale-100">
                <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                  <h3 className="text-lg font-bold text-gray-900">
                    Thêm giao dịch mới
                  </h3>
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
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Loại giao dịch
                      </label>
                      <div className="grid grid-cols-2 gap-3 p-1 bg-gray-100 rounded-lg">
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            name="type"
                            value="income"
                            className="sr-only peer"
                            checked={type === "income"}
                            onChange={() => setType("income")}
                            
                          />
                          <div
                            className={
                              "text-center py-2 rounded-md text-sm font-medium transition-all hover:bg-gray-200 " +
                              "peer-checked:bg-green-100 peer-checked:text-green-700 peer-checked:ring-1 peer-checked:ring-green-500"
                            }
                          >
                            Thu nhập (+)
                          </div>
                        </label>

                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            name="type"
                            value="expense"
                            className="sr-only peer"
                            checked={type == "expense"}
                            onChange={() => setType("expense")}
                         
                          />
                          <div
                            className={
                              "text-center py-2 rounded-md text-sm font-medium transition-all hover:bg-gray-200 " +
                              "peer-checked:bg-red-100 peer-checked:text-red-700 peer-checked:ring-1 peer-checked:ring-red-500"
                            }
                          >
                            Chi tiêu (-)
                          </div>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="amount"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Số tiền
                      </label>
                      <div className="relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">₫</span>
                        </div>
                        <input
                          type="number"
                          {...register("amount")}
                          id="amount"
                          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 py-3 sm:text-lg border-gray-300 rounded-lg border placeholder-gray-300 font-semibold text-gray-900"
                          placeholder="0"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">VND</span>
                        </div>
                      </div>
                      {errors.amount && <p className="text-red-500">{errors.amount.message}</p>}
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
                        className="block w-full pl-3 pr-10 py-2.5 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg border bg-white"
                      >
                        <option value="" disabled defaultValue="">
                          Chọn danh mục...
                        </option>
                        <option value="salary">💰 Lương</option>
                        <option value="food">🍜 Ăn uống</option>
                        <option value="shopping">🛍️ Mua sắm</option>
                        <option value="transport">🛵 Di chuyển</option>
                        <option value="home">🏠 Nhà cửa</option>
                      </select>
                      {errors.category && <p className="text-red-500">{errors.category.message}</p>}
                    </div>

                    <div>
                      <label
                        htmlFor="date"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Ngày giao dịch
                      </label>
                      <input
                        type="date"
                         {...register("date")}
                        id="date"
                        className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
                      />
                      {errors.date && <p className="text-red-500">{errors.date.message}</p>}
                    </div>

                    <div>
                      <label
                        htmlFor="note"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Ghi chú
                      </label>
                      <input
                        id="note"
                        {...register("note")}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-lg p-3"
                        placeholder="Nhập chi tiết giao dịch..."
                      />
                       {errors.note && <p className="text-red-500">{errors.note.message}</p>}
                    </div>

                    <div className="pt-4 flex items-center space-x-4">
                      <button
                        type="button"
                        className="flex-1 bg-white py-3 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                        onClick={()=>setShowModal(false)}
                      >
                        Hủy bỏ
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-indigo-600 py-3 px-4 border border-transparent rounded-lg text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg shadow-indigo-500/30 transition-all hover:-translate-y-0.5"
                      >
                        Tạo giao dịch
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
