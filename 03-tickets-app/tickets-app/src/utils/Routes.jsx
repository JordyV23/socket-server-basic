import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Escritorio, Ingresar, Cola, CrearTicket } from "../pages";

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
