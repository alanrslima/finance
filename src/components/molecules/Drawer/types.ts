import React from 'react';

export type DrawerHandle = {
  open: () => void;
  close: () => void;
};

export type DrawerProps = {
  children?: React.ReactNode;
};
