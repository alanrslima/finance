import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { styled } from "styles/stitches.config";

export const Container = styled(Drawer, {});
export const Overlay = styled(DrawerOverlay, {});

export const Content = styled(DrawerContent, {});

export const CloseButton = styled(DrawerCloseButton, {
  bg: "$blackA100",
  h: "40px",
  w: "40px",
});

export const Header = styled(DrawerHeader, {});

export const Body = styled(DrawerBody, {});
