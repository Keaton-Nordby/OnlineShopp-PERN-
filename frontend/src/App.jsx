import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import { useThemeStore } from "./store/useThemeStore";

function App() {
  const {theme} = useThemeStore()
  return (
    <div className="min-h-screen bg-base-200 transition-colors duration-300" data-theme={theme}>

      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;