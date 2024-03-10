import "./App.css";
// import Footer from "./components/layout/Footer";
// import Header from "./components/layout/Header";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import useUserRoutes from "./components/routes/userRoutes";
import useAdminRoutes from "./components/routes/adminRoutes";
import { Toaster } from "react-hot-toast";

import { lazy, Suspense } from "react";
import Loader from "./components/layout/Loader";
const Header = lazy(() => import("./components/layout/Header"));
const Footer = lazy(() => import("./components/layout/Footer"));

function App() {
  const userRoutes = useUserRoutes();
  const adminRoutes = useAdminRoutes();
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<Loader />}>
          <Toaster position="top-center" />
          <Header />
          <div className="container">
            <Routes>
              {userRoutes}
              {adminRoutes}
            </Routes>
          </div>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
