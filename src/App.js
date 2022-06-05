import { useEffect } from "react";
import { connect } from "react-redux";
import StoreFront from "./components/storefront";
import Header from "./components/header";
import Footer from "./components/footer";
import ProductPage from "./components/productPage";
import Checkout from "./components/cart/checkout";
import Container from "@mui/material/Container";
import { fetchCategories } from "./store/reduxToolkitStore/actions/categories";
import { fetchProducts } from "./store/reduxToolkitStore/actions/products";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

const App = (props) => {
  useEffect(() => {
    props.fetchCategories();
    props.fetchProducts();
  }, []);

  return (
    <div>
      <Container
        className="main"
        maxWidth="xxl"
        sx={{
          display: "flex",
          justifyContent: "flexStart",
          flexDirection: "column",
          minHeight: "90vh",
        }}
      >
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" element={<StoreFront />}></Route>
          </Switch>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Switch>
              <Route path="/products/:id" element={<ProductPage />}></Route>
              <Route path="/cart" element={<Checkout />}></Route>
            </Switch>
          </div>
        </BrowserRouter>
      </Container>
      <Footer />
    </div>
  );
};

const mapDispatchToProps = {
  fetchCategories,
  fetchProducts,
};

export default connect(null, mapDispatchToProps)(App);
