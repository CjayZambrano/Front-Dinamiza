import React from "react";
//import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
//import routes from "./routes";
//routes={routes} pegar esto dentro de <Navbar /> linea 11
//<Routes>
//{routes.map(
//  ({ path, element }, key) =>
//    element && <Route key={key} exact path={path} element={element} />
//)}
//<Route path="*" element={<Navigate to="/home" replace />} />
//</Routes>

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
    </>
  );
}

export default App;
