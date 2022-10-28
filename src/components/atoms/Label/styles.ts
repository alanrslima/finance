import { styled } from 'styles/stitches.config';
import * as LabelPrimitive from '@radix-ui/react-label';

export const Container = styled(LabelPrimitive.Root, {
  display: 'flex',
  fontSize: '$2',
  fontWeight: '600',
  lineHeight: '100%',
  color: '$colors$formLabel',

  variants: {
    isInvalid: {
      true: {
        color: '$red600',
      },
    },
  },
});
