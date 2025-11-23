import { useSelector } from "react-redux";

export default function Home() {
  const isLogin = useSelector((state) => state.login.isLogin);
  console.log(isLogin);
  return (
    <>
      <section className="bg-white overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-indigo-100 bg-indigo-50 text-indigo-600 text-xs font-semibold uppercase tracking-wide mb-6">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 animate-pulse"></span>
                Phiên bản 2.0 đã ra mắt
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Quản lý tài chính <br />
                <span className="text-indigo-600">Thông minh hơn.</span>
              </h1>
              <p className="text-lg text-gray-500 mb-8 max-w-lg leading-relaxed">
                FinDash giúp bạn theo dõi thu chi, lập ngân sách và đạt được mục
                tiêu tài chính một cách dễ dàng với giao diện trực quan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg transition-all shadow-lg hover:shadow-indigo-500/30"
                >
                  Dùng thử miễn phí
                </a>
                <a
                  href="#"
                  className="inline-flex justify-center items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 md:text-lg transition-all"
                >
                  Xem Demo
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100 flex items-center gap-4">
                <div className="flex -space-x-2">
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64"
                    alt=""
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64"
                    alt=""
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64"
                    alt=""
                  />
                </div>
                <p className="text-sm text-gray-500 font-medium">
                  Được tin dùng bởi{" "}
                  <span className="text-gray-900 font-bold">10,000+</span> người
                  dùng.
                </p>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative rounded-2xl shadow-2xl bg-gray-900 border border-gray-800 p-2 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gray-800 rounded-t-xl h-6 flex items-center px-4 space-x-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="bg-gray-50 rounded-lg overflow-hidden h-64 sm:h-80 flex flex-col p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="h-4 w-24 bg-gray-200 rounded"></div>
                    <div className="h-8 w-8 bg-indigo-100 rounded-full"></div>
                  </div>
                  <div className="flex gap-4 mb-4">
                    <div className="flex-1 h-24 bg-white rounded shadow-sm border border-gray-100 p-3">
                      <div className="h-2 w-12 bg-gray-100 rounded mb-2"></div>
                      <div className="h-6 w-20 bg-indigo-600 rounded"></div>
                    </div>
                    <div className="flex-1 h-24 bg-white rounded shadow-sm border border-gray-100 p-3">
                      <div className="h-2 w-12 bg-gray-100 rounded mb-2"></div>
                      <div className="h-6 w-20 bg-green-500 rounded"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-10 bg-white rounded border border-gray-100 w-full"></div>
                    <div className="h-10 bg-white rounded border border-gray-100 w-full"></div>
                    <div className="h-10 bg-white rounded border border-gray-100 w-full"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 -bottom-4 -left-4 bg-linear-to-r from-indigo-400 to-purple-500 rounded-2xl -z-10 blur-lg opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-indigo-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Được tin cậy bởi các nhà đầu tư cá nhân
            </h2>
            <p className="mt-3 text-xl text-indigo-200 sm:mt-4">
              Số liệu thực tế chứng minh hiệu quả của FinDash.
            </p>
          </div>
          <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
            <div className="flex flex-col">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
                Giao dịch/ngày
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">
                100K+
              </dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
                Người dùng
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">
                24/7
              </dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
                Tiết kiệm được
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">
                $2M+
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <section className="py-20 bg-gray-50" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Tính năng
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Mọi thứ bạn cần để kiểm soát ví tiền
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Không còn những bảng tính Excel rối rắm. FinDash tự động hóa mọi
              thứ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-8 border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-6">
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Báo cáo trực quan
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Biểu đồ cột, biểu đồ tròn giúp bạn nhìn thấy dòng tiền của mình
                đi đâu về đâu chỉ trong nháy mắt.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-8 border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6">
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Quản lý ngân sách
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Thiết lập giới hạn chi tiêu cho từng danh mục. Chúng tôi sẽ cảnh
                báo khi bạn sắp "vung tay quá trán".
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-8 border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6">
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
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Bảo mật tuyệt đối
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Dữ liệu của bạn được mã hóa chuẩn ngân hàng. Không ai có thể
                truy cập ngoài bạn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {!isLogin && (
        <section className="bg-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Sẵn sàng làm chủ tài chính?</span>
              <span className="block text-indigo-600">
                Tạo tài khoản miễn phí ngay hôm nay.
              </span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Đăng ký ngay
                </a>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                >
                  Tìm hiểu thêm
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
