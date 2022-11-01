import { styled } from 'styles/stitches.config';

export const RightIcon = styled('button', {
  px: '$4',
});

export const Container = styled('div', {
  position: 'relative',
  display: 'flex',
  flex: '1',
  bg: '$background',

  border: '1px solid $onSurfaceDisabled',
  br: '$1',

  fontSize: '$3',
  fontWeight: '600',
  color: '$onBackgroundPrimary',

  transition: 'all 300ms ease-in-out',

  _focus: {
    borderColor: '$primary',
    boxShadow: '$colors$boxShadow',
  },

  input: {
    all: 'unset',
    boxSizing: 'border-box',
    position: 'relative',
    display: 'flex',
    w: '100%',
    bg: 'transparent',

    minH: '40px',
    px: '$4',

    _placeholder: {
      color: '$placeholder',
    },
  },

  variants: {
    disabled: {
      true: {
        bg: '$gray100',
        cursor: 'not-allowed',
        pointerEvents: 'stroke',
      },
    },
    isInvalid: {
      true: {
        borderColor: '$red600',
      },
    },
  },
});
