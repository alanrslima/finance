import { Flex } from '@chakra-ui/react';
import { styled } from 'styles/stitches.config';

export const Container = styled(Flex, {
  direction: 'column',
  w: '100%',
});

export const WrapperLabel = styled(Flex, {
  justifyContent: 'space-between',
  mb: '$3',
  align: 'center',
});

export const ActionButton = styled('button', {
  display: 'flex',
  fontSize: '$2',
  fontWeight: 'bold',
  color: '$primary',
});

export const LabelWrapper = styled(Flex, {
  position: 'relative',
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
