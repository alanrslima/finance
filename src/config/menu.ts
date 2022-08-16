import { IconType } from "react-icons";
import { FaHome, FaWallet, FaRandom, FaTags } from "react-icons/fa";

type MenuItem = {
  id: number;
  label: string;
  url: string;
  icon: IconType;
};

type MenuConfig = {
  items: MenuItem[];
};

export const menuConfig: MenuConfig = {
  items: [
    { id: 1, label: "Home", url: "/", icon: FaHome },
    { id: 2, label: "Wallet", url: "/accounts", icon: FaWallet },
    {
      id: 3,
      label: "Transactions",
      url: "/transactions",
      icon: FaRandom,
    },
    {
      id: 4,
      label: "Categiories",
      url: "/categiories",
      icon: FaTags,
    },
  ],
};
