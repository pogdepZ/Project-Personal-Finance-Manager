import { useSelector } from "react-redux";
import { setCategory, setDate, setStatus, setSearch } from "./fiterSlice";
import { useDispatch } from "react-redux";
export default function Filter() {
const data = useSelector(state=>state.filter)
const {search, status, date, category} = data
const categories = useSelector(state=>state.categories.list)
const dispatch = useDispatch()    
  return (
    <>
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-5 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              name="search"
              id="search"
              value={search || ''}
              onChange={(e)=>dispatch(setSearch(e.target.value))}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-2.5 border"
              placeholder="Tìm kiếm theo tên giao dịch..."
            />
          </div>

          <div className="md:col-span-3">
            <select
              id="category"
              name="category"
               value={category}
              onChange={(e)=>dispatch(setCategory(e.target.value))}
              className="block w-full pl-3 pr-10 py-2.5 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg border text-gray-700"
            >
              <option value='ALL' >Tất cả danh mục</option>
                {categories.map((item)=>(
                    <option key={item.id} value={item.name}>{item.name}</option>
                ))}
            </select>
          </div>
          <div className="md:col-span-2">
            <select
              id="type"
              name="type"
               value={status}
              onChange={(e)=>dispatch(setStatus(e.target.value))}
              className="block w-full pl-3 pr-10 py-2.5 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg border text-gray-700"
            >
              <option value='ALL'>Tất cả loại</option>
              <option value="income">Thu nhập (+)</option>
              <option value="expense">Chi tiêu (-)</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <input
              type="date"
               value={date}
              onChange={(e)=>dispatch(setDate(e.target.value))}
              className="block w-full pl-3 pr-3 py-2.5 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg border text-gray-500"
            />
          </div>
        </div>
      </div>
    </>
  );
}
