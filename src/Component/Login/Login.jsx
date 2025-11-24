import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { loginThunk, toLogin } from "./loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { schema } from "./schemaYup";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [errorMessage, setErrorMessage] = useState('')

  const users= useSelector(state=>state.login.isLogin)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async(data) => {
    setErrorMessage('')
    const actionResult = await dispatch(loginThunk(data));
    if(actionResult.payload){
        navigate("/")
    }
    else{
      setErrorMessage("Tài khoản hoặc mật khẩu không chính xác")
    }
  };

  return (
    <>
      <div className="flex min-h-screen">
        <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-full lg:w-1/2 bg-white">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 text-center">
                Chào mừng trở lại
              </h2>
              <p className="mt-2 text-sm text-gray-600"></p>
            </div>
            <div className="mt-8">
              <div>
                <div className="mt-6 relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  ></div>
                </div>
              </div>
              <div className="mt-6">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                  noValidate
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        {...register("email")}
                        className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors"
                      />
                      {errors.email && (
                        <p className="text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Mật khẩu
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        type="password"
                        autoComplete="true"
                        {...register("password")}
                        className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors"
                      />
                      {errors.password && (
                        <p className="text-red-500">
                          {errors.password.message}
                        </p>
                      )}
                      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        {" "}
                        Ghi nhớ tôi{" "}
                      </label>
                    </div>

                    <div className="text-sm">
                      <Link
                        to="/register"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        {" "}
                       Hoặc đăng ký tài khoản tại đây?{" "}
                      </Link>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all hover:shadow-lg"
                    >
                      Đăng nhập
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1908&q=80"
            alt="Finance Dashboard Background"
          />

          <div className="absolute inset-0 bg-indigo-900 bg-opacity-40 mix-blend-multiply"></div>

          <div className="absolute inset-0 flex flex-col justify-end p-12 text-white">
            <blockquote className="mb-6">
              <p className="text-xl font-medium leading-relaxed">
                "FinDash đã thay đổi hoàn toàn cách tôi quản lý dòng tiền của
                công ty startup. Mọi thứ trở nên minh bạch và dễ hiểu hơn bao
                giờ hết."
              </p>
            </blockquote>
            <div className="flex items-center">
              <img
                className="h-10 w-10 rounded-full border-2 border-white"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="ml-3">
                <p className="text-base font-semibold">Nguyễn Thu Hà</p>
                <p className="text-sm text-indigo-200">CEO, TechStart Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
