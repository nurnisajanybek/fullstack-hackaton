import AuthContextProvider from "./contexts/AuthContextProvider";
import MainRoutes from "./MainRoutes";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

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
