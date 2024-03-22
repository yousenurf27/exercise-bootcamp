import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import Container from "./components/Container";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false
};

const fonts = {
  heading: 'var(--font-inter)',
  body: 'var(--font-inter)',
}

const components = {
  Container,
}

export const chakraCustomTheme = extendTheme({
  config,
  fonts,
  components
});
