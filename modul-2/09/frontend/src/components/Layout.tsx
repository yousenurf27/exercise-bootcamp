import { Outlet } from "react-router-dom"
import Navigation from "./Navigation"
import { Container } from "@chakra-ui/react"

const Layout = () => {
  return (
    <Container size={['base', 'base', 'md', 'lg']}>
      <Navigation />
      <Outlet />
    </Container>
  )
}

export default Layout