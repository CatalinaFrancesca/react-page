import "./App.css";
import React from "react";
import { ReserveTicket } from "./views/ReserveTicket";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import NavigationPage from "./components/NavigationPage";
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationPage />
        <div className="container">
          <Routes>
            <Route path="/" element={<ReserveTicket />} />
            <Route path="/products" element={<Products />}>
              <Route path="/products" element={<ProductsList />} />
            </Route>
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
