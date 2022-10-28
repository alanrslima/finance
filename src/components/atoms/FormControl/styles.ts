import { Flex } from '@chakra-ui/react';
import { styled } from 'styles/stitches.config';

export const Container = styled(Flex, {
  direction: 'column',
  w: '100%',
  // mb: '$6',
});

export const LabelWrapper = styled(Flex, {
  position: 'relative',
  w: '100%',
  mb: '$3',
});

export const Error = styled('p', {
  position: 'relative',
  display: 'flex',
  w: '100%',
  color: '$red600',
  fontWeight: '400',
  fontSize: '$1',

  mt: '$2',
});
