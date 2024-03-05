import React, { useEffect } from "react";
import "./App.scss";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

// * api
import { useSnackbar } from "notistack";
import { HttpResponseInterceptor } from "./interceptor/http-response.interceptor";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
// pages
import Layout from "./layout/Layout";

function App() {
  <Helmet>
    <title>miro</title>
    <meta name="description" content="jewllery" />
  </Helmet>;
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    HttpResponseInterceptor(navigate, enqueueSnackbar);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
