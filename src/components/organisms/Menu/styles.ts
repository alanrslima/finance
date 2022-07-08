import { Flex } from '@chakra-ui/react';
import { styled } from 'styles/stitches.config';

export const Container = styled(Flex, {
  h: '100vh',
});

export const MenuItemsWrapper = styled(Flex, {
  direction: 'column',
  listStyle: 'none',
  h: '100%',
});

export const LogoutWrapper = styled(Flex, {
  mt: 'auto',
  mb: '$6',
});
