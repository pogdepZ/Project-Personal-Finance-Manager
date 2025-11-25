import { useSelector } from "react-redux";
import { formatMoney } from "../Transactions/helper";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function DashBoard() {
  const transactions = useSelector((state) => state.transactions.list);
  const [cur, setCur] = useState(1);
  const listShow = transactions.slice(
    1,
    Math.min(5 * cur, transactions.length)
  );

  const colorMap = {
    "Ăn uống": "bg-indigo-600",
    "Di chuyển": "bg-green-500",
    "Mua sắm": "bg-yellow-500",
    "Hóa đơn": "bg-red-500",
    "Sức khỏe": "bg-pink-500",
    "Giải trí": "bg-purple-500",
    "Giáo dục": "bg-blue-400",
    "Hiếu hỉ": "bg-orange-500",
    "Cá nhân": "bg-teal-500",
    Khác: "bg-gray-500",
  };

  const totalExpense = transactions.reduce(
    (sum, item) => sum + (item.type === "expense" ? +item.amount : 0),
    0
  );
  const expenseByCategory = transactions.reduce((acc, item) => {
    if (item.type === "expense") {
      acc[item.category] = (acc[item.category] || 0) + +item.amount;
    }
    return acc;
  }, {});

  return (
    <>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white overflow-hidden shadow-sm rounded-xl border border-gray-100">
            <div className="p-5">
              <div className="flex items-center">
                <div className="shrink-0 bg-green-100 rounded-md p-3">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 11l5-5m0 0l5 5m-5-5v12"
                    />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Tổng thu nhập
                    </dt>
                    <dd>
                      <div className="text-2xl font-bold text-gray-900">
                        {transactions && (
                          <p>
                            {" "}
                            {formatMoney(
                              transactions.reduce((sum, item) => {
                                if (item.type == "income") {
                                  return parseInt(item.amount) + sum;
                                }
                                return sum;
                              }, 0)
                            )}
                            đ
                          </p>
                        )}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow-sm rounded-xl border border-gray-100">
            <div className="p-5">
              <div className="flex items-center">
                <div className="shrink-0 bg-red-100 rounded-md p-3">
                  <svg
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 13l-5 5m0 0l-5-5m5 5V6"
                    />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Tổng chi tiêu
                    </dt>
                    <dd>
                      <div className="text-2xl font-bold text-gray-900">
                        {transactions && (
                          <p>
                            {" "}
                            {formatMoney(
                              transactions.reduce((sum, item) => {
                                if (item.type == "expense") {
                                  return parseInt(item.amount) + sum;
                                }
                                return sum;
                              }, 0)
                            )}
                            đ
                          </p>
                        )}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-600 overflow-hidden shadow-lg rounded-xl border border-indigo-500 relative group">
            <div className="absolute top-0 right-0 -mr-3 -mt-3 w-20 h-20 rounded-full bg-indigo-500 opacity-50"></div>
            <div className="p-5 relative z-10">
              <div className="flex items-center">
                <div className="shrink-0 bg-indigo-500 rounded-md p-3">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-indigo-100 truncate">
                      Số dư hiện tại
                    </dt>
                    <dd>
                      <div className="text-2xl font-bold text-white">
                        {transactions && (
                          <p>
                            {formatMoney(
                              transactions.reduce((sum, item) => {
                                if (item.type == "income") {
                                  return parseInt(item.amount) + sum;
                                }
                                return sum;
                              }, 0) -
                                transactions.reduce((sum, item) => {
                                  if (item.type == "expense") {
                                    return parseInt(item.amount) + sum;
                                  }
                                  return sum;
                                }, 0)
                            )}
                            đ
                          </p>
                        )}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-1">
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Phân tích chi tiêu
            </h3>

            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 pie-chart mb-6 shadow-inner ring-4 ring-gray-50 rounded-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <span className="block text-gray-400 text-xs">
                      Tổng chi
                    </span>
                    <span className="block text-xl font-bold text-gray-800">
                      {formatMoney(
                        transactions.reduce((sum, item) => {
                          if (item.type == "expense") {
                            return parseInt(item.amount) + sum;
                          }
                          return sum;
                        }, 0)
                      )}
                      đ
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full space-y-3">
                {Object.entries(expenseByCategory).map(([cate, amount]) => {
                  const percent = ((amount / totalExpense) * 100).toFixed(0);
                  const color = colorMap[cate] || "bg-gray-400";

                  return (
                    <div
                      key={cate}
                      className="flex items-center justify-between text-sm"
                    >
                      <div className="flex items-center">
                        <span
                          className={`w-3 h-3 ${color} rounded-full mr-2`}
                        ></span>
                        <span className="text-gray-600">
                          {cate} ({percent}%)
                        </span>
                      </div>

                      <span className="font-medium text-gray-900">
                        {formatMoney(amount)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 lg:col-span-2 flex flex-col">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-lg font-bold text-gray-900">
                Giao dịch gần đây
              </h3>

              <Link
                to="/categories"
                className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Xem tất cả
              </Link>
            </div>

            <ul className="divide-y divide-gray-100">
              {listShow &&
                listShow.map((item) => (
                  <li
                    className="p-4 sm:p-6 hover:bg-gray-50 transition-colors cursor-pointer group"
                    key={item.id}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center min-w-0">
                        {item.type == "expense" && (
                          <div className="shrink-0 h-12 w-12 rounded-full bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-100 transition-colors">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                              ></path>
                            </svg>
                          </div>
                        )}
                        {item.type == "income" && (
                          <div className="shrink-0 h-12 w-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-100 transition-colors">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                            </svg>
                          </div>
                        )}
                        <div className="ml-4 truncate">
                          <p className="text-sm font-medium text-gray-900 truncate group-hover:text-indigo-600 transition-colors">
                            {item.note}
                          </p>
                          <div className="flex items-center mt-1">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                              {item.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-5">
                        <div className="flex flex-col items-end ml-4">
                          <p
                            className={
                              item.type == "expense"
                                ? "text-base font-bold text-red-600"
                                : "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800"
                            }
                          >
                            {formatMoney(item.amount)}VNĐ
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            {item.date}
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            dispatch(deleteThunk(item.id));
                          }}
                          className="cursor-pointer"
                        >
                          <i className="fa-solid fa-delete-left text-red-500 text-3xl"></i>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
            <div className="p-4 border-t border-gray-100 bg-gray-50 rounded-b-xl flex">
              {cur > 1 && (
                <button
                  className="w-full text-center text-sm text-gray-500 hover:text-gray-700"
                  onClick={() => setCur(cur - 1)}
                >
                  Ẩn bớt
                </button>
              )}

              <button
                className="w-full text-center text-sm text-gray-500 hover:text-gray-700"
                onClick={() => setCur(cur + 1)}
              >
                Xem thêm giao dịch cũ hơn
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
