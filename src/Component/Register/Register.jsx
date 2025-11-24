import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./registerSchema";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { createAccount } from "./helper";
import { useState } from "react";


export default function Register() {
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)})
    const [isRegister, setRegister] = useState(undefined)
    const onSubmit = async (data)=>{
        setRegister(undefined)
        const res = await createAccount(data);
        if(res){
            setRegister(true)    
        }
        else{
            setRegister(false)
        }   
    }
    console.log(isRegister)
    return (
    <>
      <div className="flex min-h-screen">
        <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-full lg:w-1/2 bg-white">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Tạo tài khoản mới
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Đã có tài khoản?
                <Link
                  to="/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
                >
                  {" "}
                  Đăng nhập ngay{" "}
                </Link>
              </p>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                  <div>
                    <label
                      htmlFor="fullname"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {" "}
                      Tên hiển thị{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="fullname"
                        {...register("fullName")}
                        placeholder="Ví dụ: Nguyễn Văn A"
                        
                        className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all"
                      />
                    </div>
                    {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
                  </div>

                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {" "}
                      Tài khoản{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="username"
                        {...register("email")}
                        placeholder="Email"
                        className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all"
                      />
                      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {" "}
                      Mật khẩu{" "}
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <input
                        id="password"
                        type="password"
                        {...register("password")}
                        placeholder="Tối thiểu 8 ký tự" 
                        className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all pr-10"
                      />
                       {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400" >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="font-medium text-gray-700">
                        Tôi đồng ý với{" "}
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-500"
                        >
                          Điều khoản
                        </a>{" "}
                        và{" "}
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-500"
                        >
                          Chính sách bảo mật
                        </a>
                        .
                      </label>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all hover:shadow-lg hover:-translate-y-0.5 transform"
                    >
                      Đăng ký tài khoản
                    </button>
                  </div>
                </form>
                {isRegister && <p className="text-green-500">Bạn đã đăng ký thành công vui lòng đăng nhập lại</p>}
                 {isRegister == false && <p className="text-red-500">Tài khoản đã có người sử dụng</p>}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
            alt="Financial Growth"
          />

          <div className="absolute inset-0 bg-green-900 bg-opacity-40 mix-blend-multiply"></div>

          <div className="absolute inset-0 flex flex-col justify-end p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Bắt đầu quản lý tài chính thông minh
            </h3>
            <p className="text-lg text-indigo-100 max-w-lg">
              "Gia nhập cộng đồng hơn 10.000 người đang đạt được tự do tài chính
              mỗi ngày cùng POGNOVA."
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
