import "./App.css";
import React from "react";
import { ReserveTicket } from "./views/ReserveTicket";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import NavigationPage from "./components/NavigationPage";
import ProductsIndex from "./components/ProductsIndex";
import Backstage from "./components/Backstage";
import OrderPackage from "./components/OrderPackage";
import ProductEdit from "./components/ProductEdit";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationPage />
        <div className="container">
          <Routes>
            <Route path="/" element={<ReserveTicket />} />
            <Route path="/" element={<Products />}>
              <Route path="/products" element={<ProductsIndex />} />
              <Route path="/products/:id" element={<ProductEdit />}/>
            </Route>
            <Route path="/" element={<Backstage/>}>
              <Route path="/backstage" element={<OrderPackage/>}/>
              </Route>
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
