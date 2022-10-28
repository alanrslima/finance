// import { colorScaleContainer, colorScaleItem } from 'animations';
import { forwardRef, ReactElement, useEffect } from 'react';
// import { useDebouncedCallback } from 'use-debounce';
import { useContinueRef } from 'contexts/ContinueRefContext';
import { Content, ItemContainer } from './styles';
import { InputProps } from './types';
// import { ExpandButton } from './expandButton.component';
import { ColorPickerRadio } from 'components/atoms/ColorPickerRadio';

const comp = forwardRef<HTMLInputElement, InputProps>((props, ref): ReactElement => {
  const { name, id, register, selected, onCollapse, collapsed, isCollapsable, options, distribution } = props || {};
  const { continueRef } = useContinueRef();

  const handleClick = () => {
    console.log('CLICK', continueRef);
    continueRef?.current?.click();
  };

  return (
    <Content>
      {options?.map(({ value }) => {
        const isSelected: boolean = selected === value;
        const arias = { 'aria-selected': isSelected };

        return (
          <ItemContainer
            // onClick={handleClick}
            key={`cls-${value}`}
            htmlFor={`rdb_${name}${value}`}
            className={(isSelected && 'selected') || ''}
            {...arias}
          >
            <input id={id ?? `rdb_${name}${value}`} type="radio" value={value} {...(register ?? { ref, name })} />
            <ColorPickerRadio selected={isSelected} value={value} />
          </ItemContainer>
        );
      })}
    </Content>
  );
});

export const Input = comp;
