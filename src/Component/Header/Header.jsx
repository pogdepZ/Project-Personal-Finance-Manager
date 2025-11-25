import { Link, useNavigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toLogout } from "../Login/loginSlice";
export default function Header() {
  const isLogin = useSelector((state) => state.login.isLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleMouseLogout = () => {
    dispatch(toLogout())
    setTimeout(()=>{
        navigate("/")
    }, 0)

  };
  const handleActive = (isActive) =>{
    return isActive ? "text-indigo-600 bg-indigo-50 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                    : "text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 group flex items-center"
  }
  return (
    <>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center shrink-0">
              <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white mr-2 shadow-md">
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

            <div className="hidden md:flex space-x-1 items-center">
              <NavLink
                to="/"
                className={({isActive})=>handleActive(isActive)}
              >
                Home
              </NavLink>

              <NavLink
                to="/dashboard"
                className={({isActive})=>handleActive(isActive)}
              >
                Dashboard
              </NavLink>

              <NavLink
                to="/transactions"
               className={({isActive})=>handleActive(isActive)}
              >
                Transaction
              </NavLink>

              <NavLink
                to="/categories"
                 className={({isActive})=>handleActive(isActive)}
              >
                Categories
              </NavLink>

              <NavLink
                to="/budget"
                 className={({isActive})=>handleActive(isActive)}
              >
                Budget
              </NavLink>
            </div>

            <div className="hidden md:flex items-center space-x-4">

              <div className="h-6 w-px bg-gray-200"></div>

              {!isLogin && (
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all hover:shadow-md"
                >
                  Login
                </Link>
              )}
                {!isLogin && (
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all hover:shadow-md"
                >
                  Register
                </Link>
              )}
              {isLogin && (
                <button
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all hover:shadow-md"
                  onMouseDown={handleMouseLogout}
                >
                  Logout
                </button>
              )}
            </div>

            
          </div>
        </div>
      </nav>
    </>
  );
}
