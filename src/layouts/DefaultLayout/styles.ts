import { Flex } from '@chakra-ui/react';
import { styled } from 'styles/stitches.config';

export const Container = styled(Flex, {
  h: '100vh',
  w: '100vw',
  bg: '$gray100',
  zIndex: '$0',
});

export const Content = styled(Flex, {
  flex: '1',
  h: '100%',
  minH: '100%',
  overflow: 'scroll',
  p: '$0 $5 $9',
});

export const InnerContent = styled(Flex, {
  direction: 'column',
  w: '100%',
  h: 'max-content',
  maxW: '1920px',
  mx: 'auto',
  py: '$7',
  // overflowY: 'hidden',
});
