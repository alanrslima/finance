import { Flex, Spinner as CSpinner } from '@chakra-ui/react';
import { styled } from 'styles/stitches.config';

export const Container = styled('button', {
  position: 'relative',
  display: 'flex',
  padding: '$4',
  minH: '$10',
  borderRadius: '$2',
  fontWeight: 'bold',
  alignItems: 'center',
  justify: 'center',
  transition: '$1',

  _hover: {
    opacity: 0.5,
  },

  variants: {
    schema: {
      primary: {
        background: '$primary',
        color: 'white',
      },
      secondary: {
        bg: '$background',
        border: '1px solid $colors$onBackgroundDisabled',
        color: '$primary',
      },
    },
  },

  _disabled: {
    '&:hover, &:active, &:focus': {
      cursor: 'not-allowed',
      bg: 'transparent',
      borderColor: '$gray200',
      color: '$gray300',
    },
  },

  defaultVariants: {
    schema: 'secondary',
  },
});

export const WrapperLeftIcon = styled(Flex, {
  position: 'absolute',
  left: '$5',
});

export const SpinnerContainer = styled(Flex, {
  position: 'absolute',
  w: '100%',
  justifyContent: 'center',
});

export const Spinner = styled(CSpinner, {
  size: '18px',
  justifyContent: 'center',
});
