import { ReactElement } from 'react';
import { IconProps } from './types';
import { AiOutlineGoogle, AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

export function Icon(props: IconProps): ReactElement {
  const IconSelector = ({ name, ...rest }: IconProps) => {
    switch (name) {
      case 'google':
        return <AiOutlineGoogle {...rest} />;
      case 'facebook':
        return <FaFacebookF {...rest} />;
      case 'eyeInvisible':
        return <AiFillEyeInvisible {...rest} />;
      case 'eye':
        return <AiFillEye {...rest} />;
      default:
        return <></>;
    }
  };

  return <IconSelector {...props} />;
}
