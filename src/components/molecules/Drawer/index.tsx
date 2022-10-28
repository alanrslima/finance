import { ElementRef, forwardRef, ForwardRefRenderFunction, useImperativeHandle } from 'react';
import {
  Drawer as CDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { DrawerHandle, DrawerProps } from './types';

const Component: ForwardRefRenderFunction<DrawerHandle, DrawerProps> = (props, forwardedRef) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useImperativeHandle(forwardedRef, () => ({
    open: onOpen,
    close: onClose,
  }));

  return (
    <CDrawer onClose={onClose} isOpen={isOpen} size="md">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{`drawer contents`}</DrawerHeader>
        <DrawerBody>{props.children}</DrawerBody>
      </DrawerContent>
    </CDrawer>
  );
};

export const Drawer = forwardRef(Component);

export type DrawerElement = ElementRef<typeof Drawer>;
