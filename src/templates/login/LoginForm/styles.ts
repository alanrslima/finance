import { Flex } from '@chakra-ui/react';
import { styled } from 'styles/stitches.config';

export const WrapperButtons = styled(Flex, {
  flexDirection: 'column',
  pt: '$7',
  gap: '$4',
  justifySelf: 'center',
  maxW: '360px',
  w: '100%',
});
