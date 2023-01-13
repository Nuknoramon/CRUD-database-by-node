import { Route, Routes } from "react-router-dom";

import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import Header from "./components/Header";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const ctx = useAuth();
  return (
    <>
      <Header />
      <Routes>
        {ctx.isLogged ? (
          <Route path="/" element={<HomePage />} />
        ) : (
          <>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </>
        )}
        <Route path="*" element={<h1>404 !!! Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
