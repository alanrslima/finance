import { Flex, Link } from '@chakra-ui/react';
import { styled } from 'styles/stitches.config';

export const Container = styled(Flex, {
  display: 'flex',
  direction: 'column',

  w: '260px',
  minW: '260px',
  maxW: '260px',
  h: '100%',

  pl: '$space$8',
});

export const LogoWrapper = styled(Link, {
  display: 'flex',
  mt: '$space$8',
  mb: '$space$9',
  w: 'max-content',

  _focus: {
    outline: '0',
    boxShadow: '0 0 2px 1px $colors$green400',
  },

  _active: {
    outline: '0',
    boxShadow: '0 0 4px 2px $colors$green400',
  },
});
