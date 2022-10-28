import { UseFormRegisterReturn } from 'react-hook-form';

export type ColorScaleOption = {
  value: string;
  label: string;
};

export type ColorScaleDistribution = 'spread';

export type ColorScaleProps = {
  id?: string;
  name: string;
  controlled?: boolean;
  options?: ColorScaleOption[];
  radioItem?: JSX.Element;
  distribution?: ColorScaleDistribution;
  collapsed?: boolean;
  required?: boolean;
  onCollapse?: (value: any) => void;
  isCollapsable?: boolean;
};

export type InputProps = Omit<ColorScaleProps, 'controlled'> & {
  register?: UseFormRegisterReturn;
  selected?: string;
};
