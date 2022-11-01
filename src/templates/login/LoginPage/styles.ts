import { Flex, Text } from '@chakra-ui/react';
import { styled } from 'styles/stitches.config';

export const Title = styled(Text, {
  fontSize: '$6',
  fontWeight: '$bold',
  color: '$onSurfacePrimary',
  '@sm': {
    fontSize: '$7',
  },
});

export const Subtitle = styled(Text, {
  fontSize: '$2',
  pb: '$10',
  color: '$onSurfaceSecondary',
  '@sm': {
    fontSize: '$3',
  },
});

export const Body = styled(Flex, {
  flexDirection: 'column',
  justify: 'center',
  flex: 1,
});

export const Footer = styled(Flex, {
  justify: 'center',
});

export const FooterText = styled(Flex, {
  color: '$onSurfacePrimary',
});

export const FooterButton = styled('button', {
  color: '$primary',
  fontWeight: 'bold',
  ml: '$2',
  transition: '$1',

  _hover: {
    opacity: 0.5,
  },
});
