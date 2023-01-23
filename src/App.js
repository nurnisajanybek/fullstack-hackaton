import AuthContextProvider from "./contexts/AuthContextProvider";
import MainRoutes from "./MainRoutes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login";
import ServicesContextProvider from "./contexts/ServicesContextProvider";
import CartContextProvider from "./contexts/FavouritesContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ServicesContextProvider>
        {/* <CartContextProvider> */}
          <Navbar />
          <MainRoutes />
          <Footer />
          {/* </CartContextProvider> */}
          
        </ServicesContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
