import { Flex } from '@chakra-ui/react';
import { styled } from 'styles/stitches.config';

export const Container = styled(Flex, {
  backgroundImage: 'url(/assets/images/coins_born.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  bg: '$bg',
  h: '100vh',
  '@sm': { maxW: '640px' },
  '@md': { maxW: '768px' },
  '@lg': { maxW: '1024px' },
  '@xl': { maxW: '1280px' },
  '@xl2': { maxW: '1536px' },
  mx: 'auto',
});

export const Overlay = styled(Flex, {
  h: '100%',
  w: '100%',
  backgroundImage: 'linear-gradient(90deg, #FAFAFC 48.3%, rgba(250, 250, 252, 0.20) 100%)',
});

export const WrapperCard = styled(Flex, {
  padding: '$5',
  w: '100%',
  '@sm': {
    padding: '$8',
  },
  '@lg': { maxW: '50%' },
});
