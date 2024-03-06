import '@fontsource-variable/roboto-mono';
import { extendTheme } from '@chakra-ui/react'

import Container from './components/container';
import styles from './styles'

const overrides = {
  fonts: {
    heading: `'Roboto Mono Variable', monospace`,
  },
  styles,
  components: {
    Container,
  },
}

export default extendTheme(overrides)
