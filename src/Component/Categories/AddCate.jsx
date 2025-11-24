export default function AddCategory() {
  return (
    <>

      <div class="relative bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all scale-100">
        <div class="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <h3 class="text-lg font-bold text-gray-900">Thêm danh mục mới</h3>
          <button class="text-gray-400 hover:text-gray-500 focus:outline-none">
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div class="p-6">
          <form action="#" method="POST" class="space-y-6">
            <div class="space-y-4">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700 mb-1"
                >
                  Tên danh mục
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="focus:ring-indigo-500 focus:border-indigo-500 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm text-gray-900 placeholder-gray-400"
                  placeholder="Ví dụ: Ăn uống, Tiền nhà..."
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Loại danh mục
                </label>
                <div class="grid grid-cols-2 gap-3 p-1 bg-gray-100 rounded-lg">
                  <label class="cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      value="income"
                      class="sr-only peer"
                    />
                    <div class="text-center py-2 rounded-md text-sm font-medium text-gray-500 peer-checked:bg-white peer-checked:text-green-600 peer-checked:shadow-sm transition-all hover:text-gray-700">
                      Thu nhập (Income)
                    </div>
                  </label>
                  <label class="cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      value="expense"
                      class="sr-only peer"
                      checked
                    />
                    <div class="text-center py-2 rounded-md text-sm font-medium text-gray-500 peer-checked:bg-white peer-checked:text-red-600 peer-checked:shadow-sm transition-all hover:text-gray-700">
                      Chi tiêu (Expense)
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-3">
                Chọn biểu tượng
              </label>
              <div class="grid grid-cols-6 gap-2">
                <label class="cursor-pointer">
                  <input
                    type="radio"
                    name="icon"
                    value="burger"
                    class="sr-only peer"
                    checked
                  />
                  <div class="h-10 w-10 flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-xl hover:bg-gray-100 peer-checked:border-indigo-500 peer-checked:bg-indigo-50 peer-checked:ring-1 peer-checked:ring-indigo-500 transition-all">
                    🍔
                  </div>
                </label>

                <label class="cursor-pointer">
                  <input
                    type="radio"
                    name="icon"
                    value="pizza"
                    class="sr-only peer"
                  />
                  <div class="h-10 w-10 flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-xl hover:bg-gray-100 peer-checked:border-indigo-500 peer-checked:bg-indigo-50 peer-checked:ring-1 peer-checked:ring-indigo-500 transition-all">
                    🍕
                  </div>
                </label>

                <label class="cursor-pointer">
                  <input
                    type="radio"
                    name="icon"
                    value="shopping"
                    class="sr-only peer"
                  />
                  <div class="h-10 w-10 flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-xl hover:bg-gray-100 peer-checked:border-indigo-500 peer-checked:bg-indigo-50 peer-checked:ring-1 peer-checked:ring-indigo-500 transition-all">
                    🛒
                  </div>
                </label>

                <label class="cursor-pointer">
                  <input
                    type="radio"
                    name="icon"
                    value="gift"
                    class="sr-only peer"
                  />
                  <div class="h-10 w-10 flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-xl hover:bg-gray-100 peer-checked:border-indigo-500 peer-checked:bg-indigo-50 peer-checked:ring-1 peer-checked:ring-indigo-500 transition-all">
                    🎁
                  </div>
                </label>

                <label class="cursor-pointer">
                  <input
                    type="radio"
                    name="icon"
                    value="car"
                    class="sr-only peer"
                  />
                  <div class="h-10 w-10 flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-xl hover:bg-gray-100 peer-checked:border-indigo-500 peer-checked:bg-indigo-50 peer-checked:ring-1 peer-checked:ring-indigo-500 transition-all">
                    🚗
                  </div>
                </label>

                <label class="cursor-pointer">
                  <input
                    type="radio"
                    name="icon"
                    value="book"
                    class="sr-only peer"
                  />
                  <div class="h-10 w-10 flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-xl hover:bg-gray-100 peer-checked:border-indigo-500 peer-checked:bg-indigo-50 peer-checked:ring-1 peer-checked:ring-indigo-500 transition-all">
                    📚
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input
                    type="radio"
                    name="icon"
                    value="med"
                    class="sr-only peer"
                  />
                  <div class="h-10 w-10 flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-xl hover:bg-gray-100 peer-checked:border-indigo-500 peer-checked:bg-indigo-50 peer-checked:ring-1 peer-checked:ring-indigo-500 transition-all">
                    💊
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input
                    type="radio"
                    name="icon"
                    value="pet"
                    class="sr-only peer"
                  />
                  <div class="h-10 w-10 flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-xl hover:bg-gray-100 peer-checked:border-indigo-500 peer-checked:bg-indigo-50 peer-checked:ring-1 peer-checked:ring-indigo-500 transition-all">
                    🐶
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input
                    type="radio"
                    name="icon"
                    value="game"
                    class="sr-only peer"
                  />
                  <div class="h-10 w-10 flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-xl hover:bg-gray-100 peer-checked:border-indigo-500 peer-checked:bg-indigo-50 peer-checked:ring-1 peer-checked:ring-indigo-500 transition-all">
                    🎮
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input
                    type="radio"
                    name="icon"
                    value="bill"
                    class="sr-only peer"
                  />
                  <div class="h-10 w-10 flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-xl hover:bg-gray-100 peer-checked:border-indigo-500 peer-checked:bg-indigo-50 peer-checked:ring-1 peer-checked:ring-indigo-500 transition-all">
                    🧾
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input
                    type="radio"
                    name="icon"
                    value="travel"
                    class="sr-only peer"
                  />
                  <div class="h-10 w-10 flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-xl hover:bg-gray-100 peer-checked:border-indigo-500 peer-checked:bg-indigo-50 peer-checked:ring-1 peer-checked:ring-indigo-500 transition-all">
                    ✈️
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input
                    type="radio"
                    name="icon"
                    value="home"
                    class="sr-only peer"
                  />
                  <div class="h-10 w-10 flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-xl hover:bg-gray-100 peer-checked:border-indigo-500 peer-checked:bg-indigo-50 peer-checked:ring-1 peer-checked:ring-indigo-500 transition-all">
                    🏠
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-3">
                Màu sắc hiển thị
              </label>
              <div class="flex items-center space-x-4">
                <label class="cursor-pointer relative">
                  <input
                    type="radio"
                    name="color"
                    value="red"
                    class="sr-only peer"
                    checked
                  />
                  <div class="w-8 h-8 rounded-full bg-red-500 hover:opacity-90 peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-red-500 transition-all"></div>
                </label>

                <label class="cursor-pointer relative">
                  <input
                    type="radio"
                    name="color"
                    value="blue"
                    class="sr-only peer"
                  />
                  <div class="w-8 h-8 rounded-full bg-blue-500 hover:opacity-90 peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-blue-500 transition-all"></div>
                </label>

                <label class="cursor-pointer relative">
                  <input
                    type="radio"
                    name="color"
                    value="green"
                    class="sr-only peer"
                  />
                  <div class="w-8 h-8 rounded-full bg-green-500 hover:opacity-90 peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-green-500 transition-all"></div>
                </label>

                <label class="cursor-pointer relative">
                  <input
                    type="radio"
                    name="color"
                    value="yellow"
                    class="sr-only peer"
                  />
                  <div class="w-8 h-8 rounded-full bg-yellow-500 hover:opacity-90 peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-yellow-500 transition-all"></div>
                </label>

                <label class="cursor-pointer relative">
                  <input
                    type="radio"
                    name="color"
                    value="purple"
                    class="sr-only peer"
                  />
                  <div class="w-8 h-8 rounded-full bg-purple-500 hover:opacity-90 peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-purple-500 transition-all"></div>
                </label>

                <label class="cursor-pointer relative">
                  <input
                    type="radio"
                    name="color"
                    value="gray"
                    class="sr-only peer"
                  />
                  <div class="w-8 h-8 rounded-full bg-gray-500 hover:opacity-90 peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-gray-500 transition-all"></div>
                </label>
              </div>
            </div>

            <div class="pt-4 flex items-center space-x-4">
              <button
                type="button"
                class="flex-1 bg-white py-3 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                Hủy bỏ
              </button>
              <button
                type="submit"
                class="flex-1 bg-indigo-600 py-3 px-4 border border-transparent rounded-lg  text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg shadow-indigo-500/30 transition-all hover:-translate-y-0.5"
              >
                Lưu danh mục
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
