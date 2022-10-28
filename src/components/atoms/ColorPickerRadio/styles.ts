import { Flex, Icon } from '@chakra-ui/react';
import { styled } from 'styles/stitches.config';

export const SelectedMark = styled(Icon, {
  position: 'relative',
  display: 'flex',
  size: '20px',

  color: 'inherit',

  opacity: 0,
});

export const Container = styled(Flex, {
  position: 'relative',
  display: 'flex',

  justify: 'center',
  align: 'center',

  w: '40px',
  h: '40px',
  // minH: '40px',
  // maxH: '40px',

  bg: 'transparent',
  border: '1px solid transparent',
  br: '$2',

  transition: 'all 300ms ease-in-out',

  _hover: {
    transform: 'scale(1.2)',
  },

  variants: {
    selected: {
      true: {
        [`& ${SelectedMark}`]: {
          opacity: 1,
        },
      },
    },
  },

  // variants: {
  //   color: {
  //     '1': {
  //       bg: '$colorScale1',
  //       borderColor: '$colorScale1Border',
  //       color: '$red600',
  //     },
  //     '2': {
  //       bg: '$colorScale2',
  //       borderColor: '$colorScale2Border',
  //       color: '$red600',
  //     },
  //     '3': {
  //       bg: '$colorScale3',
  //       borderColor: '$colorScale3Border',
  //       color: '$red500',
  //     },
  //     '4': {
  //       bg: '$colorScale4',
  //       borderColor: '$colorScale4Border',
  //       color: '$gray500',
  //     },
  //     '5': {
  //       bg: '$colorScale5',
  //       borderColor: '$colorScale5Border',
  //       color: '$green600',
  //     },
  //     '6': {
  //       bg: '$colorScale6',
  //       borderColor: '$colorScale6Border',
  //       color: '$green700',
  //     },
  //     '7': {
  //       bg: '$colorScale7',
  //       borderColor: '$colorScale7Border',
  //       color: '$green700',
  //     },
  //   },
  //   selected: {
  //     true: {
  //       [`& ${SelectedMark}`]: {
  //         opacity: 1,
  //       },
  //     },
  //   },
  // },

  // defaultVariants: {
  //   color: 4,
  // },
});
