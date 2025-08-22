import React from "react";
import "./style/App.css";
import "./style/Navbar.css";
import "./style/Home.css";
import "./style/CategoryView.css";
import "./style/ProductView.css";
import "./style/NotAvailable.css";
import "./style/CartPreview.css";
import "./style/Cart.css";
import "./style/Footer.css";
import "./style/Search.css";
import "./style/SearchResults.css";
import { AppProvider } from "./context/Context";
import { AppProviderSearch } from "./context/ContextSearch";
import Navigation from "./components/common/Navigation";
import Main from "./components/Main";
import Footer from "./components/common/Footer";

export default function App() {
  return (
    <AppProvider>
      <AppProviderSearch>
          <div>
            <Navigation />
            <Main />
            <Footer />
          </div>
      </AppProviderSearch>
    </AppProvider>
  );
}
