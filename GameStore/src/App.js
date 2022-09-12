import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage/HomePage";
import { Header } from "./components/header";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import { GamePage } from "./pages/gamePage/GamePage";
import { OrderPage } from "./components/orderPage/OrderPage";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/app/:title" element={<GamePage />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
