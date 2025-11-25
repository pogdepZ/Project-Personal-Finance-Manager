import { useForm } from "react-hook-form";
import { schema } from "./shemaAddCate";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { createThunk } from "./categoriesSlice";

export default function ModalCate({ isShowModal, setShowModal }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const dispatch = useDispatch()
  const [type, setType] = useState("income");
  const onSubmit = (data) => {
    dispatch(createThunk({...data, type: type, status: 'notUse'}))
    setShowModal(false)
    reset()
  };

  const modalRef = useRef(null)
  useEffect(()=>{
    if(!isShowModal) return
    const handleMouseDown = (e)=>{
        if(modalRef.current && !modalRef.current.contains(e.target)){
          setShowModal(false)
        }
    }   
    document.body.style.overflow = 'hidden'
    window.addEventListener('mousedown',handleMouseDown)
    return (()=>{
      window.removeEventListener('mousedown', handleMouseDown)
      document.body.style.overflow = 'unset'
    })
  }, [isShowModal])
  return (
    <>
      {isShowModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center ">
          <div ref={modalRef} className="fixed bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all scale-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h3 className="text-lg font-bold text-gray-900">
                Thêm danh mục mới
              </h3>
              <button className="text-gray-400 hover:text-gray-500 focus:outline-none" onClick={()=>setShowModal(false)}>
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
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Tên danh mục
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register("name")}
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm text-gray-900 placeholder-gray-400"
                      placeholder="Ví dụ: Ăn uống, Tiền nhà..."
                    />
                    {errors.name && (
                      <p classNameName="text-red-500">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Loại danh mục
                    </label>
                    <div className="grid grid-cols-2 gap-3 p-1 bg-gray-100 rounded-lg">
                      <label className="cursor-pointer">
                        <input
                          type="radio"
                          name="type"
                          value="income"
                          className="sr-only peer"
                          checked={type == "income" ? true : false}
                          onChange={() => setType("income")}
                        />
                        <div className="text-center py-2 rounded-md text-sm font-medium text-gray-500 peer-checked:bg-white peer-checked:text-green-600 peer-checked:shadow-sm transition-all hover:text-gray-700">
                          Thu nhập (Income)
                        </div>
                      </label>
                      <label className="cursor-pointer">
                        <input
                          type="radio"
                          name="type"
                          value="expense"
                          className="sr-only peer"
                          checked={type == "expense" ? true : false}
                          onChange={() => setType("expense")}
                        />
                        <div className="text-center py-2 rounded-md text-sm font-medium text-gray-500 peer-checked:bg-white peer-checked:text-red-600 peer-checked:shadow-sm transition-all hover:text-gray-700">
                          Chi tiêu (Expense)
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="pt-4 flex items-center space-x-4">
                  <button
                    type="button"
                    onClick={()=>setShowModal(false)}
                    className="flex-1 bg-white py-3 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                  >
                    Hủy bỏ
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-indigo-600 py-3 px-4 border border-transparent rounded-lg  text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg shadow-indigo-500/30 transition-all hover:-translate-y-0.5"
                  >
                    Lưu danh mục
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
