import { IconType } from "react-icons";

export type MenuItemProps = {
  active?: boolean;
  icon: IconType;
  url: string;
  exact?: boolean;
};
