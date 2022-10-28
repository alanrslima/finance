import { ConnectForm } from 'components/atoms/ConnectForm';
import { forwardRef, ReactElement } from 'react';
import { Input } from './input.component';
import { Container } from './styles';
import { ColorScaleProps } from './types';

const comp = forwardRef<HTMLInputElement, ColorScaleProps>((props, ref): ReactElement => {
  const {
    name,
    radioItem,
    required,
    collapsed,
    onCollapse,
    controlled = true,
    isCollapsable = true,
    ...inputProps
  } = props || {};

  return (
    <Container>
      <ConnectForm>
        {({ register, watch }) => {
          const selected = watch(name);
          const hasControl = controlled && register ? register(name) : undefined;
          return (
            <Input
              key={name}
              radioItem={radioItem}
              name={name}
              register={hasControl}
              {...inputProps}
              ref={ref}
              selected={selected}
              collapsed={isCollapsable ? collapsed : false}
              onCollapse={onCollapse}
              isCollapsable={isCollapsable}
            />
          );
        }}
      </ConnectForm>
    </Container>
  );
});

comp.displayName = 'ColorPicker';
export const ColorPicker = comp;
