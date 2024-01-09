import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import FooterTop from "./Components/Footer/FooterTop";
import FooterBody from "./Components/Footer/FooterBody";
import { useState } from "react";
import Cart from "./Components/Body/Cart";
import Registration from "./Components/Login/Registration";
import Signup from "./Components/Login/Signup";
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Productsdata from "./Components/Constants/Productsdata";

function App() {
  const [showbar, setbar] = useState(1);

  function closebar() {
    setbar(0);
  }

  function resetshowbar() {
    setbar(1);
  }

  function Layout() {
    return (
      <>
        <Header val={showbar} resetshowbar={resetshowbar} />
        <ScrollRestoration />
        <Outlet></Outlet>
        <FooterTop />
        <FooterBody />
      </>
    );
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Body />} loader={Productsdata}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Route>
        <Route path="/signin" element={<Signup></Signup>}></Route>
        <Route path="/registor" element={<Registration></Registration>}></Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
