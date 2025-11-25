import { useEffect, useRef, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { formatMoney } from "../Transactions/helper";
import ModalBudget from "./ModalBudget";

const getCategoryIcon = (name) => {
  const lowerName = name.toLowerCase();
  if (lowerName.includes("ăn") || lowerName.includes("food")) return "🍔";
  if (lowerName.includes("sắm") || lowerName.includes("shop")) return "🛒";
  if (lowerName.includes("di") || lowerName.includes("đi lại")) return "🚗";
  if (lowerName.includes("game") || lowerName.includes("giải trí")) return "🎮";
  if (lowerName.includes("nhà") || lowerName.includes("house")) return "🏠";
  return "💰";
};

export default function Budget() {
  const budget = useSelector((state) => state.budget.list);
  const transactions = useSelector((state) => state.transactions.list);

  const [data, setData] = useState({
    month: "",
    year: "",
    categories: {},
  });
  const [isShowModal, setShowModal] = useState(false);
  const categoryStats = useMemo(() => {
    if (!data.month || !data.year) return [];
    const currentMonth = parseInt(data.month);
    const currentYear = parseInt(data.year);
    const monthlyTransactions = transactions.filter((t) => {
      const tDate = new Date(t.date);
      return (
        tDate.getMonth() + 1 === currentMonth &&
        tDate.getFullYear() === currentYear
      );
    });

    const actualSpending = monthlyTransactions.reduce((acc, curr) => {
      const catName = curr.category;
      const amount = Number(curr.amount) || 0;
      acc[catName] = (acc[catName] || 0) + amount;
      return acc;
    }, {});

    const allCategories = new Set([
      ...Object.keys(data.categories || {}),
      ...Object.keys(actualSpending),
    ]);

    return Array.from(allCategories).map((catKey) => {
      const planned = Number(data.categories?.[catKey]) || 0;
      const actual = actualSpending[catKey] || 0;
      const percentage =
        planned > 0
          ? Math.round((actual / planned) * 100)
          : actual > 0
          ? 100
          : 0;

      return {
        category: catKey,
        planned,
        actual,
        remaining: planned - actual,
        percentage,
      };
    });
  }, [transactions, data.month, data.year, data.categories]);

  const summary = useMemo(() => {
    const totalPlanned = categoryStats.reduce(
      (acc, item) => acc + item.planned,
      0
    );
    const totalActual = categoryStats.reduce(
      (acc, item) => acc + item.actual,
      0
    );
    const totalRemaining = totalPlanned - totalActual;
    const totalPercentage =
      totalPlanned > 0 ? Math.round((totalActual / totalPlanned) * 100) : 0;

    return { totalPlanned, totalActual, totalRemaining, totalPercentage };
  }, [categoryStats]);

  const inputRef = useRef(null);

  useEffect(() => {
    if (budget.length > 0) {
      setData(budget[0]);
    }
  }, [budget]);

  const handleChangeBudget = (e) => {
    const findBuget = budget.find((item) => {
      const yearMonth =
        item.year + "-" + item.month.toString().padStart(2, "0");
      return yearMonth == e.target.value;
    });

    if (findBuget) {
      setData({
        ...findBuget,
        month: findBuget.month.toString(),
        year: findBuget.year.toString(),
      });
    } else {
      setData({
        month: e.target.value.slice(-2),
        year: e.target.value.slice(0, 4),
        categories: {},
      });
    }
  };

  return (
    <>
      <main className="relative z-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="sm:flex sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Ngân sách tháng {data.month}/{data.year}
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Quản lý giới hạn chi tiêu để đạt mục tiêu tiết kiệm.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex space-x-3">
            <input
              ref={inputRef}
              type="month"
              value={
                data.year && data.month
                  ? `${data.year}-${data.month.toString().padStart(2, "0")}`
                  : ""
              }
              onChange={handleChangeBudget}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-all hover:shadow-lg"
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
              Thiết lập ngân sách
            </button>
          </div>
        </div>

        {data.categories && Object.keys(data.categories).length > 0 ? (
          <>
            <div className="bg-indigo-900 rounded-2xl shadow-lg p-6 mb-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 rounded-full bg-indigo-800 opacity-50 blur-2xl"></div>

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
                <div>
                  <p className="text-indigo-200 text-sm font-medium">
                    Tổng ngân sách dự kiến
                  </p>
                  <p className="text-3xl font-bold mt-1">
                    {formatMoney(summary.totalPlanned)}
                  </p>
                </div>
                <div>
                  <p className="text-indigo-200 text-sm font-medium">
                    Đã chi tiêu
                  </p>
                  <p className="text-3xl font-bold mt-1">
                    {formatMoney(summary.totalActual)}
                  </p>
                </div>
                <div>
                  <p className="text-indigo-200 text-sm font-medium">Còn lại</p>
                  <p
                    className={`text-3xl font-bold mt-1 ${
                      summary.totalRemaining < 0
                        ? "text-red-400"
                        : "text-green-400"
                    }`}
                  >
                    {formatMoney(summary.totalRemaining)}
                  </p>
                </div>
              </div>

              <div className="mt-6 relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-800">
                  <div
                    style={{
                      width: `${Math.min(summary.totalPercentage, 100)}%`,
                    }}
                    className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center transition-all duration-500 ${
                      summary.totalPercentage > 100
                        ? "bg-red-500"
                        : "bg-indigo-400"
                    }`}
                  ></div>
                </div>
                <p className="text-xs text-indigo-300 text-right">
                  Bạn đã dùng {summary.totalPercentage}% tổng ngân sách
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {categoryStats.map((item) => {
                let colorTheme = "blue";
                let bgColor = "bg-white";
                let borderColor = "border-gray-200";
                let iconBg = "bg-blue-100";
                let percentBg = "bg-blue-100 text-blue-800";
                let barColor = "bg-blue-500";
                let textColor = "text-gray-900";

                if (item.percentage >= 100) {
                  colorTheme = "red";
                  bgColor = "bg-red-50";
                  borderColor = "border-red-200";
                  iconBg = "bg-red-100";
                  percentBg = "bg-red-200 text-red-800";
                  barColor = "bg-red-600";
                  textColor = "text-red-900";
                } else if (item.percentage >= 80) {
                  colorTheme = "yellow";
                  iconBg = "bg-orange-100";
                  percentBg = "bg-yellow-100 text-yellow-800";
                  barColor = "bg-yellow-500";
                } else {
                  if (item.percentage < 50) {
                    iconBg = "bg-green-100";
                    percentBg = "bg-green-100 text-green-800";
                    barColor = "bg-green-500";
                  }
                }

                return (
                  <div
                    key={item.category}
                    className={`${bgColor} rounded-xl shadow-sm border ${borderColor} p-6 hover:shadow-md transition-shadow`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div
                          className={`shrink-0 h-10 w-10 rounded-full ${iconBg} flex items-center justify-center text-xl`}
                        >
                          {getCategoryIcon(item.category)}
                        </div>
                        <div className="ml-4">
                          <h3 className={`text-lg font-bold ${textColor}`}>
                            {item.category}
                          </h3>
                          {item.percentage >= 100 && (
                            <p className="text-xs text-red-500 font-semibold">
                              Cảnh báo: Đã vượt quá giới hạn
                            </p>
                          )}
                        </div>
                      </div>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${percentBg}`}
                      >
                        {item.percentage}%
                      </span>
                    </div>

                    <div
                      className={`w-full ${
                        item.percentage >= 100 ? "bg-red-200" : "bg-gray-100"
                      } rounded-full h-3 mb-2`}
                    >
                      <div
                        className={`${barColor} h-3 rounded-full transition-all duration-1000`}
                        style={{ width: `${Math.min(item.percentage, 100)}%` }}
                      ></div>
                    </div>

                    <div className="flex justify-between text-sm font-medium">
                      <span className="text-gray-600">
                        Đã dùng:{" "}
                        <span className={textColor}>
                          {formatMoney(item.actual)}
                        </span>
                      </span>
                      <span className="text-gray-400">
                        Giới hạn: {formatMoney(item.planned)}
                      </span>
                    </div>
                    {item.remaining < 0 && (
                      <p className="text-right text-xs text-red-500 mt-1">
                        Vượt mức: {formatMoney(Math.abs(item.remaining))}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">💸</div>
            <p className="text-xl text-gray-500 font-medium">
              Chưa có ngân sách cho tháng {data.month}/{data.year}.
            </p>
            <button className="mt-4 text-indigo-600 hover:text-indigo-800 font-semibold">
              + Thêm ngân sách ngay
            </button>
          </div>
        )}
      </main>
      <ModalBudget isShowModal={isShowModal} setShowModal={setShowModal} />
    </>
  );
}
