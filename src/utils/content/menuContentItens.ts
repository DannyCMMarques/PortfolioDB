import { FaHome, FaVoteYea } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { TfiAgenda } from "react-icons/tfi";
import type { MenuItem } from "../interfaces/MenuContentInterface";
const menuContentItens: MenuItem[] = [
  {
    id: 1,
    label: "Home",
    link: "/",
    icon: FaHome,
    active: false,
  },
  {
    id: 2,
    label: "Pautas",
    link: "/pautas",
    icon: TfiAgenda,
    active: false,
  },
  {
    id: 3,
    label: "Sessões",
    link: "/sessoes",
    icon: FaVoteYea,
    active: false,
  },
  {
    id: 4,
    label: "Meus Dados",
    link: "/associado",
    icon: FaUser,
    active: false,
  },
];

export default menuContentItens;
