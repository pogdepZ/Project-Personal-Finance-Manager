import { useState } from "react";
import Layout from "./Layout/Layout";
import { useRoutes } from "react-router-dom";
import routers from "./app/routers";
import { useDispatch } from "react-redux";
import { fetchThunk } from "./Component/Transactions/transactionSlice";
import { useEffect } from "react";
import { getThunk } from "./Component/Categories/categoriesSlice";
function App() {
  const element = useRoutes(routers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getThunk());
    dispatch(fetchThunk());
  }, []);

  return <>{element}</>;
}

export default App;
