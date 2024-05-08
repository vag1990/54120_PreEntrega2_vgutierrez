import "./CategoryList.css";
import { NavLink } from "react-router-dom";

const MIS_RUTAS = [
  {
    path: "/inicio",
    label: "inicio",
  },
  {
    path: "/productos",
    label: "productos",
  },
 
  {
    path: "/blends",
    label: "blends",
  },
  {
    path: "/contacto",
    label: "contacto",
  },
  
];

function CategoryList() {
  return (
    <nav>
      <ul className="category--list">
        {MIS_RUTAS.map((ruta) => (
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to={ruta.path}
            >
              {ruta.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CategoryList;
