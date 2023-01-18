import AuthContextProvider from "./contexts/AuthContextProvider";
import MainRoutes from "./MainRoutes";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login";

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
