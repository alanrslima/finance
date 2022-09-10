import { Flex, Text } from '@chakra-ui/react';
import { styled } from 'styles/stitches.config';

export const Container = styled('button', {
  p: '$8',
  flexDirection: 'column',
  bg: 'rgba(108,99,255,0.12)',
  br: '$4',
  cursor: 'pointer',
  mb: '$6',
  w: '100%',
  '@sm': {
    w: 'auto',
    mr: '$6',
  },
});

export const Title = styled(Text, {
  color: '$gray600',
  fontWeight: '$medium',
  mb: '$3',
});

export const Value = styled(Text, {
  fontWeight: '$black',
  fontSize: '$5',
});

export const Description = styled(Text, {
  mt: '$3',
  color: '$gray600',
  fontSize: '$1',
});
