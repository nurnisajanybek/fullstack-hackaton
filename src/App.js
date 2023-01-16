import AuthContextProvider from "./contexts/AuthContextProvider";
import MainRoutes from "./MainRoutes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <MainRoutes />
        <Footer />
      </AuthContextProvider>
    </>
  );
}

export default App;
