import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import useUserRoutes from "./components/routes/userRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  const userRoutes = useUserRoutes();
  return (
    <Router>
      <div className="App">
        <Toaster position="top-center" />
        <Header />
        <div className="container">
          <Routes>{userRoutes}</Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
