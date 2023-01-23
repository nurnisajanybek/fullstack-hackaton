import AuthContextProvider from "./contexts/AuthContextProvider";
import MainRoutes from "./MainRoutes";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login";
import ServicesContextProvider from "./contexts/ServicesContextProvider";
import FavoritesContextProvider from "./contexts/FavoritesContextProvider";

function App() {
  return (
    <>
      <AuthContextProvider>
        <FavoritesContextProvider>
          <ServicesContextProvider>
            <Navbar />
            <MainRoutes />
            <Footer />
          </ServicesContextProvider>
        </FavoritesContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
