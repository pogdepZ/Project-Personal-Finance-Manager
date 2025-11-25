import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white mr-2 shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <span className="font-bold text-xl tracking-tight text-gray-900">
                  POGNOVA
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Quản lý tài chính cá nhân hiệu quả, trực quan và bảo mật. Giúp
                bạn đạt được tự do tài chính nhanh hơn.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                Sản phẩm
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/dashborad"
                    className="text-gray-500 hover:text-indigo-600 transition-colors text-sm"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/transactions"
                    className="text-gray-500 hover:text-indigo-600 transition-colors text-sm"
                  >
                    Transactions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/budget"
                    className="text-gray-500 hover:text-indigo-600 transition-colors text-sm"
                  >
                    Budgeting Tool
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                Hỗ trợ
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-indigo-600 transition-colors text-sm"
                  >
                    Trung tâm trợ giúp
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-indigo-600 transition-colors text-sm"
                  >
                    API Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-indigo-600 transition-colors text-sm"
                  >
                    Bảo mật
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-indigo-600 transition-colors text-sm"
                  >
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                Cập nhật tin tức
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Nhận các mẹo quản lý tài chính mới nhất.
              </p>
              <form className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
                <button
                  type="button"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors shadow-sm"
                >
                  Đăng ký
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
              &copy; 2025 POGNOVA Inc. All rights reserved.
            </p>

            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/thanh.phong.819561"
                className="text-gray-400 hover:text-gray-500"
                target="_blank"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="https://github.com/pogdepZ"
                className="text-gray-400 hover:text-gray-500"
                target="_blank"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
