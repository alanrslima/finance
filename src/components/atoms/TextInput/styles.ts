import { styled } from 'styles/stitches.config';

export const Container = styled('div', {
  position: 'relative',
  display: 'flex',
  flex: '1',
  bg: '$white',

  border: '1px solid $gray500',
  br: '$1',

  fontSize: '$3',
  fontWeight: '600',
  color: '$gray900',

  transition: 'all 300ms ease-in-out',

  _focus: {
    borderColor: '$primary',
    boxShadow: '0 0 5px rgba(55, 96, 237, 0.4)',
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
