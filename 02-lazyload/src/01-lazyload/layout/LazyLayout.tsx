import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";

const LazyLayout = () => {
  return (
    <div>
      <h1>Nav que sirve para todas las hijas</h1>
      {/* // Rutas hijas aqui */}
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "nav-active" : "")}
            to="lazy1"
          >
            Lazy 1
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "nav-active" : "")}
            to="lazy2"
          >
            Lazy 2
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "nav-active" : "")}
            to="lazy3"
          >
            Lazy 3
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="lazy1" element={<LazyPage1 />} />
        <Route path="lazy2" element={<LazyPage2 />} />
        <Route path="lazy3" element={<LazyPage3 />} />
        {/* <Route path="/*" element={<div>Not Found</div>} /> */}
        <Route path="/*" element={<Navigate replace to="lazy1"/>} />
      </Routes>
    </div>
  );
};
export default LazyLayout;
