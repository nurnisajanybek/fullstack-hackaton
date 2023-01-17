import AuthContextProvider from "./contexts/AuthContextProvider";
import MainRoutes from "./MainRoutes";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ServicesContextProvider from "./contexts/ServicesContextProvider";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ServicesContextProvider>
          <NavBar />
          <MainRoutes />
          <Footer />
        </ServicesContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
