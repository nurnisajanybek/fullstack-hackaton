import NavBar from "./components/NavBar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import MainRoutes from "./MainRoutes";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <MainRoutes />
        <Footer />
      </AuthContextProvider>
    </>
  );
}

export default App;
