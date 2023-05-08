import Header from "./components/Header/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./context/authContext";
import ErrorPage from "./pages/ErrorPage";
import Container from "./layout/Container";

function App() {
  const { auth } = useAuth();
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<Product />} />
        </Route>

        {/* Todo for Routes with Pre-Fix */}
        <Route
          path="/todo/*"
          element={
            <Routes>
              <Route
                path="/a"
                element={
                  <Container>
                    <h1>A</h1>
                  </Container>
                }
              />
              <Route
                path="/b"
                element={
                  <Container>
                    <h1>B</h1>
                  </Container>
                }
              />
            </Routes>
          }
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
