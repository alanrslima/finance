import { forwardRef, ReactElement, useState } from 'react';
import { Icon } from '../Icon';
import { RightIcon } from './styles';
import { InputProps } from './types';

const comp = forwardRef<HTMLInputElement, InputProps>((props, ref): ReactElement => {
  const { name, id, register, list, ...inputProps } = props || {};

  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible((prevState) => !prevState);
  };

  const type = props.secureTextEntry ? (visible ? 'text' : 'password') : props.type;

  return (
    <>
      <input
        list={list || null}
        id={id ?? `txt_${name}`}
        type={type}
        {...(register ?? { ref, name })}
        {...inputProps}
      />
      {props.secureTextEntry && (
        <RightIcon type="button" onClick={handleVisible}>
          <Icon size={22} name={visible ? 'eye' : 'eyeInvisible'} />
        </RightIcon>
      )}
    </>
  );
});

comp.displayName = 'Input';
export const Input = comp;
