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
import { DrawerHandle } from './types';

const Component: ForwardRefRenderFunction<DrawerHandle> = (props, forwardedRef) => {
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
        <DrawerBody>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Consequat nisl vel pretium lectus quam id. Semper quis lectus nulla at volutpat diam ut
            venenatis. Dolor morbi non arcu risus quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
            magna eget est lorem. Erat imperdiet sed euismod nisi porta. Lectus vestibulum mattis ullamcorper velit.
          </p>
        </DrawerBody>
      </DrawerContent>
    </CDrawer>
  );
};

export const Drawer = forwardRef(Component);

export type DrawerElement = ElementRef<typeof Drawer>;
