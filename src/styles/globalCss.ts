import { globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },

  body: {
    background: '#E8EDF6',
    overflow: 'hidden',
    maxHeight: '-webkit-fill-available',
  },
});
