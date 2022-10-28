import { Flex } from '@chakra-ui/react';
// import { motion } from 'framer-motion';
import { styled } from 'styles/stitches.config';

export const Container = styled(Flex, {
  width: '100%',
});

export const Content = styled(Flex, {
  py: '$2',
  w: '100%',
  flexWrap: 'wrap',
});

export const ItemContainer = styled('label', {
  display: 'flex',
  cursor: 'pointer',
  p: '$2',

  // '> input': {
  //   position: 'absolute',
  //   opacity: '0',
  // },
});
