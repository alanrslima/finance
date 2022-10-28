import { ReactElement } from 'react';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { ColorScaleProps } from './types';
import { Container, SelectedMark } from './styles';

export function ColorPickerRadio({ value, selected }: ColorScaleProps): ReactElement {
  return (
    <Container selected={selected} css={{ background: value }}>
      <SelectedMark as={IoCheckmarkSharp} />
    </Container>
  );
}
