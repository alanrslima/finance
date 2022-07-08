import { ReactNode } from "react";
import {
  IoBuild,
  IoBusiness,
  IoList,
  IoListCircle,
  IoListOutline,
} from "react-icons/io5";
import { TiFlowChildren } from "react-icons/ti";

type MenuItem = {
  id: number;
  label: string;
  url: string;
  icon: ReactNode;
};

type MenuConfig = {
  items: MenuItem[];
};

export const menuConfig: MenuConfig = {
  items: [
    { id: 1, label: "Profile", url: "/profile", icon: IoBusiness },
    { id: 2, label: "Dashboard", url: "/dashboard", icon: TiFlowChildren },
    { id: 3, label: "Wallets", url: "/wallets", icon: TiFlowChildren },
  ],
};
