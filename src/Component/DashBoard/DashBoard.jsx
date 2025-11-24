export default function DashBoard() {
  return (
    <>
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-white overflow-hidden shadow-sm rounded-xl border border-gray-100">
            <div class="p-5">
              <div class="flex items-center">
                <div class="shrink-0 bg-green-100 rounded-md p-3">
                  <svg
                    class="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 11l5-5m0 0l5 5m-5-5v12"
                    />
                  </svg>
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 truncate">
                      Tổng thu nhập
                    </dt>
                    <dd>
                      <div class="text-2xl font-bold text-gray-900">
                        12,000,000 đ
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white overflow-hidden shadow-sm rounded-xl border border-gray-100">
            <div class="p-5">
              <div class="flex items-center">
                <div class="shrink-0 bg-red-100 rounded-md p-3">
                  <svg
                    class="h-6 w-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 13l-5 5m0 0l-5-5m5 5V6"
                    />
                  </svg>
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 truncate">
                      Tổng chi tiêu
                    </dt>
                    <dd>
                      <div class="text-2xl font-bold text-gray-900">
                        8,000,000 đ
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-indigo-600 overflow-hidden shadow-lg rounded-xl border border-indigo-500 relative group">
            <div class="absolute top-0 right-0 -mr-3 -mt-3 w-20 h-20 rounded-full bg-indigo-500 opacity-50"></div>
            <div class="p-5 relative z-10">
              <div class="flex items-center">
                <div class="shrink-0 bg-indigo-500 rounded-md p-3">
                  <svg
                    class="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-indigo-100 truncate">
                      Số dư hiện tại
                    </dt>
                    <dd>
                      <div class="text-2xl font-bold text-white">
                        4,000,000 đ
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-1">
            <h3 class="text-lg font-bold text-gray-900 mb-6">
              Phân tích chi tiêu
            </h3>

            <div class="flex flex-col items-center">
              <div class="relative w-48 h-48 pie-chart mb-6 shadow-inner ring-4 ring-gray-50 rounded-full">
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full flex items-center justify-center">
                  <div class="text-center">
                    <span class="block text-gray-400 text-xs">Tổng chi</span>
                    <span class="block text-xl font-bold text-gray-800">
                      8M
                    </span>
                  </div>
                </div>
              </div>

              <div class="w-full space-y-3">
                <div class="flex items-center justify-between text-sm">
                  <div class="flex items-center">
                    <span class="w-3 h-3 bg-indigo-600 rounded-full mr-2"></span>
                    <span class="text-gray-600">Ăn uống (35%)</span>
                  </div>
                  <span class="font-medium text-gray-900">2.8M</span>
                </div>
                <div class="flex items-center justify-between text-sm">
                  <div class="flex items-center">
                    <span class="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    <span class="text-gray-600">Di chuyển (25%)</span>
                  </div>
                  <span class="font-medium text-gray-900">2.0M</span>
                </div>
                <div class="flex items-center justify-between text-sm">
                  <div class="flex items-center">
                    <span class="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                    <span class="text-gray-600">Mua sắm (20%)</span>
                  </div>
                  <span class="font-medium text-gray-900">1.6M</span>
                </div>
                <div class="flex items-center justify-between text-sm">
                  <div class="flex items-center">
                    <span class="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                    <span class="text-gray-600">Khác (20%)</span>
                  </div>
                  <span class="font-medium text-gray-900">1.6M</span>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-sm border border-gray-100 lg:col-span-2 flex flex-col">
            <div class="p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 class="text-lg font-bold text-gray-900">Giao dịch gần đây</h3>
              <a
                href="#"
                class="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Xem tất cả
              </a>
            </div>

            <ul class="divide-y divide-gray-100">
              <li class="p-4 hover:bg-gray-50 transition-colors">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                        ></path>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <p class="text-sm font-medium text-gray-900">
                        Ăn uống (Food)
                      </p>
                      <p class="text-xs text-gray-500">12/10/2025 • 12:30 PM</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <p class="text-sm font-bold text-red-600">- 150,000 đ</p>
                    <p class="text-xs text-gray-400">Ví tiền mặt</p>
                  </div>
                </div>
              </li>

              <li class="p-4 hover:bg-gray-50 transition-colors">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                        ></path>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <p class="text-sm font-medium text-gray-900">
                        Lương tháng 10
                      </p>
                      <p class="text-xs text-gray-500">10/10/2025 • 08:00 AM</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <p class="text-sm font-bold text-green-600">
                      + 5,000,000 đ
                    </p>
                    <p class="text-xs text-gray-400">Vietcombank</p>
                  </div>
                </div>
              </li>

              <li class="p-4 hover:bg-gray-50 transition-colors">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        ></path>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <p class="text-sm font-medium text-gray-900">
                        Mua sắm quần áo
                      </p>
                      <p class="text-xs text-gray-500">08/10/2025 • 19:45 PM</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <p class="text-sm font-bold text-red-600">- 300,000 đ</p>
                    <p class="text-xs text-gray-400">Thẻ tín dụng</p>
                  </div>
                </div>
              </li>

              <li class="p-4 hover:bg-gray-50 transition-colors">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        ></path>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <p class="text-sm font-medium text-gray-900">Tiền điện</p>
                      <p class="text-xs text-gray-500">05/10/2025 • 10:00 AM</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <p class="text-sm font-bold text-red-600">- 500,000 đ</p>
                    <p class="text-xs text-gray-400">Momo</p>
                  </div>
                </div>
              </li>
            </ul>
            <div class="p-4 border-t border-gray-100 bg-gray-50 rounded-b-xl">
              <button class="w-full text-center text-sm text-gray-500 hover:text-gray-700">
                Xem thêm giao dịch cũ hơn
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
