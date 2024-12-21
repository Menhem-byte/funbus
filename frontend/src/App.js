import "./App.css";
import Home from "./pages/MainPage";
import AboutUs from "./components/aboutus/AboutUs";
import RegistrationPage from "./pages/RegistrationPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
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
