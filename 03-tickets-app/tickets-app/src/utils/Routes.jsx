import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Escritorio, Ingresar, Cola, CrearTicket } from "../pages";

/**
 * Array de objetos que representa los elementos de la barra lateral.
 * Cada objeto tiene propiedades como 'key', 'icon' y 'label'.
 * @type {Array<Object>}
 */
export const sidebarItems = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: <Link to="/ingresar"> Ingresar </Link>,
  },
  {
    key: "2",
    icon: <VideoCameraOutlined />,
    label: <Link to="/cola"> Cola </Link>,
  },
  {
    key: "3",
    icon: <UploadOutlined />,
    label: <Link to="/crear"> Crear Tickets </Link>,
  },
];

/**
 * Array de objetos que representa las rutas y elementos correspondientes.
 * Cada objeto tiene propiedades como 'path' y 'element'.
 * @type {Array<Object>}
 */
export const routerItems = [
  {
    path: "/ingresar",
    element: <Ingresar />,
  },
  {
    path: "/escritorio",
    element: <Escritorio />,
  },
  {
    path: "/cola",
    element: <Cola />,
  },
  {
    path: "/crear",
    element: <CrearTicket />,
  },
];
