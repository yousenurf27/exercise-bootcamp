import '@fontsource/raleway';
import { extendTheme } from '@chakra-ui/react'
import styles from './styles'
import Container from './components/container'
import Checkbox from './components/checkbox'
import Button from './components/button';

const overrides = {
  fonts: {
    heading: `'Raleway', sans-serif`,
  },
  styles,
  components: {
    Container,
    Checkbox,
    Button,
  },
}

export default extendTheme(overrides)