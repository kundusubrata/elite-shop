import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import useUserRoutes from "./components/routes/userRoutes";

function App() {
  const userRoutes = useUserRoutes();
  return (
    <Router>
      <div className="App">
        <Header />
        <div class="container">
          <Routes>
            {userRoutes}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
