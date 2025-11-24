import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="sm:flex sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Quản lý danh mục</h1>
            <p className="mt-1 text-sm text-gray-500">
              Tùy chỉnh các nhóm chi tiêu và thu nhập của bạn.
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Link
            
                to="/addcategories"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <svg
                className="-ml-1 mr-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Thêm danh mục
            </Link>
          </div>
        </div>

        <div className="bg-white shadow-sm rounded-xl border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                >
                  Icon & Tên
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                >
                  Loại (Type)
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                >
                  Trạng thái
                </th>
                <th scope="col" className="relative px-6 py-4">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors group">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-xl">
                      🍔
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-bold text-gray-900">
                        Ăn uống (Food)
                      </div>
                      <div className="text-xs text-gray-500">
                        Chi tiêu hàng ngày
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 border border-red-200">
                    Expense
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="flex items-center text-green-600 font-medium text-xs">
                    <span className="h-2 w-2 rounded-full bg-green-500 mr-1.5"></span>{" "}
                    Đang dùng
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-900 group-hover:underline"
                  >
                    Sửa
                  </a>
                </td>
              </tr>

              <tr className="hover:bg-gray-50 transition-colors group">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-xl">
                      🛒
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-bold text-gray-900">
                        Mua sắm (Shopping)
                      </div>
                      <div className="text-xs text-gray-500">Quần áo, đồ dùng</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 border border-red-200">
                    Expense
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="flex items-center text-green-600 font-medium text-xs">
                    <span className="h-2 w-2 rounded-full bg-green-500 mr-1.5"></span>{" "}
                    Đang dùng
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-900 group-hover:underline"
                  >
                    Sửa
                  </a>
                </td>
              </tr>

              <tr className="hover:bg-gray-50 transition-colors group">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-xl">
                      💼
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-bold text-gray-900">
                        Lương (Salary)
                      </div>
                      <div className="text-xs text-gray-500">Thu nhập chính</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 border border-green-200">
                    Income
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="flex items-center text-green-600 font-medium text-xs">
                    <span className="h-2 w-2 rounded-full bg-green-500 mr-1.5"></span>{" "}
                    Đang dùng
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-900 group-hover:underline"
                  >
                    Sửa
                  </a>
                </td>
              </tr>

              <tr className="hover:bg-gray-50 transition-colors group">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="shrink-0 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-xl">
                      🚗
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-bold text-gray-900">
                        Di chuyển (Transport)
                      </div>
                      <div className="text-xs text-gray-500">Xăng xe, Grab</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 border border-red-200">
                    Expense
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="flex items-center text-green-600 font-medium text-xs">
                    <span className="h-2 w-2 rounded-full bg-green-500 mr-1.5"></span>{" "}
                    Đang dùng
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-900 group-hover:underline"
                  >
                    Sửa
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
