"use client"

import { useEffect, useState } from 'react'
import {
  Box,
  Container,
  HStack,
  Heading,
  Highlight,
  Icon,
  Slide,
  Text,
  VStack,
  useDisclosure
} from '@chakra-ui/react'
import Link from 'next/link'
import styles from './styles/Menu.module.css'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { usePathname } from 'next/navigation'

interface IMenuList {
  title: string,
  url: string,
}

const menus: IMenuList[] = [
  {
    title: 'Products',
    url: '/products'
  },
  {
    title: 'Teams',
    url: '/teams'
  },
  {
    title: 'About Us',
    url: '/about'
  },
]

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure()
  const [ width, setWidth ] = useState<number>()
  const pathname = usePathname()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])
  return (
    <Box mt={{ base: '58px', md: '61px', lg: '70px'}}>
      <Box w='100%' position='fixed' top={0} bg={'gray.50'} zIndex={50}>
        <Container size={{base: 'base', md: 'md', lg: 'xl'}}>
          <HStack py='1rem' justify='space-between'>
            <Link href='/'>
              <Heading size={{ base: 'sm', md: 'md', lg: 'lg' }}>
                <Highlight
                  query={'X'}
                  styles={{ px: 2, py: 1, rounded: 'lg', bg: 'teal.400', color: 'white' }}>
                    X Furniture
                </Highlight>
              </Heading>
            </Link>
            {width !== undefined && +width > 767 ? (
              <HStack spacing='5' className={styles.menu} display={{ base: 'none', md: 'inherit' }}>
                {menus.map(({ title, url }, index) => (
                  <Link
                   className={`${pathname.match(`${url}`) ? 'menu-active' : '' }`}
                    href={url} key={index}>
                    <Text fontSize={{ md: 'lg' }} fontWeight='500'>
                      {title}
                    </Text>
                  </Link>
                ))}
              </HStack>
            ) : (
              <>
                <Box
                  display={{ base: 'inherit', md: 'none'}}
                  onClick={onToggle}>
                  <Icon as={HamburgerIcon} boxSize={6} />
                </Box>
                <Slide direction='right' in={isOpen} style={{ zIndex: 100 }}>
                  <VStack
                    py={'2.5rem'}
                    px={'1rem'}
                    position={'fixed'}
                    top={'0'}
                    bottom={'0'}
                    right={'0'}
                    left={'50%'}
                    spacing={8}
                    backgroundColor={'gray.100'}>
                    <Box
                      display={{ base: 'inherit', md: 'none'}}
                      onClick={onToggle}
                      position='absolute'
                      p={4}
                      top={0}
                      left={0}>
                      <Icon as={CloseIcon} boxSize={4} />
                    </Box>
                    {menus.map(({ title, url }, index) => (
                      <Link href={url} key={index}
                        className={`${styles.focus} ${pathname.match(`${url}`) ? 'menu-active' : '' }`}>
                        <Text fontSize={{ base: 'md' }} fontWeight='500'>
                          {title}
                        </Text>
                      </Link>
                    ))}
                  </VStack>
                </Slide>
              </>
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  )
}

export default Navbar