import "./App.css";
import Home from "./pages/MainPage";
import AboutUs from "./components/aboutus/AboutUs";
import RegistrationPage from "./pages/RegistrationPage";
import Root from "./pages/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "signup",
        element: <RegistrationPage />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" exact element={<Home />} />
    //     <Route path="/signup" element={<RegistrationPage />} />
    //     <Route path="/aboutus" element={<AboutUs />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
