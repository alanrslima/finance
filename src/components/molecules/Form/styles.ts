import { Flex } from '@chakra-ui/react';
import { styled } from 'styles/stitches.config';

export const Container = styled(Flex, {
  direction: 'column',
  w: '100%',
  maxW: '100%',
  flex: '1',
});

export const Fieldset = styled(Flex, {
  direction: 'column',
  w: '100%',
  maxW: '100%',
  flex: '1',
  border: 0,
});
