import { useEffect } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import useApi from "./hooks/useApi";
import Home from "./pages/home/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/home/auth/login/index";
import RegisterPage from "./pages/home/auth/register/index";
import ContactPage from "./pages/contact";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "./redux/categorySlice";
import ProductListPage from "./pages/product-list";

function App() {
  const api = useApi();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      console.log("burası immediate call function bolgesi");
      const result = await api.get("shop/taxons", {
        params: {
          page: 1,
          itemsPerPage: 30,
        },
      });
      console.log(result);
      dispatch(setCategories(result.data));
    })();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth">
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
          <Route path="/product/list" element={<ProductListPage />} />

          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
