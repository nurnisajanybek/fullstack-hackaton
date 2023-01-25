import AuthContextProvider from "./contexts/AuthContextProvider";
import MainRoutes from "./MainRoutes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login";
import ServicesContextProvider from "./contexts/ServicesContextProvider";
import FavoritesContextProvider from "./contexts/FavoritesContextProvider";
import RatingContextProvider from "./contexts/RatingContextProvider";

function App() {
  return (
    <>
      <AuthContextProvider>
        <RatingContextProvider>
          <FavoritesContextProvider>
            <ServicesContextProvider>
              {/* <CartContextProvider> */}
              <Navbar />
              <MainRoutes />
              <Footer />
              {/* </CartContextProvider> */}
            </ServicesContextProvider>
          </FavoritesContextProvider>
        </RatingContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
