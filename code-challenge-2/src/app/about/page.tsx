"use client"

import TeamCart from "@/components/TeamCart"
import useTeams from "@/hooks/useTeams"
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  Highlight,
  Text,
} from "@chakra-ui/react"
import Link from "next/link"

const Page = () => {
  const { data: dataUsers } = useTeams()
  return (
    <>
      <Box
        p={{ base: '2rem', md: '3rem', lg: '5rem', xl: '8rem' }}
        borderRadius={'lg'}>
        <Center flexDir={'column'} textAlign={'center'}>
          <Heading
            position={'relative'}
            mb={{ base: '1rem', md: '2rem' }}
            fontSize={{ base: '1.5rem', lg: '2.5rem' }}
            _before={{
              content: `''`,
              position: 'absolute',
              right: '0',
              left: '0',
              bottom: '-1px',
              height: '3px',
              backgroundColor: 'teal.200'
            }}>
            Our History
          </Heading>
          <Text
            fontSize={{ base: '1rem', lg: '1.25rem', xl: '1.5rem' }}>
            <Highlight
              query={'Richard McClintock'}
              styles={{ px: 2, py: 0.5, rounded: 'lg', bg: 'teal.200', color: 'white' }}>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
            </Highlight>
          </Text>
        </Center>
      </Box>
      <Box
        py={{ base: '2rem', md: '3rem', lg: '5rem' }}
        px={'1rem'}
        bg={'gray.100'}
        borderRadius='1rem'>
        <Center>
          <Heading
            position={'relative'}
            mb={{ base: '2rem', md: '2.5rem' }}
            fontSize={{ base: '1.5rem', lg: '2.5rem' }}
            _before={{
              content: `''`,
              position: 'absolute',
              right: '0',
              left: '0',
              bottom: '-1px',
              height: '3px',
              backgroundColor: 'teal.200'
            }}>
            Our Teams
          </Heading>
        </Center>
        <Grid
          position='relative'
          templateColumns='repeat(auto-fit,  minmax(250px, 1fr))' gap={6}
          _after={{
            content: "''",
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50%',
            bgGradient: 'linear(to-t, teal.900 10%, teal.50)',
            opacity: 0.95,
            borderRadius: '.5rem'
          }}>
            {dataUsers?.results.map((props: any) => (
              <TeamCart
                key={props.id.value}
                props={props}/>
            ))}
        </Grid>
        <Flex
          justify='center'
          alignItems='center'
          mt='2rem'>
          <Link href='/teams'>
            <Button colorScheme='teal'>
              See All Teams
            </Button>
          </Link>
        </Flex>
      </Box>
      <Box
        p={{ base: '2rem', md: '3rem', lg: '5rem', xl: '8rem' }}
        borderRadius={'lg'}>
        <Center flexDir={'column'} textAlign={'center'}>
          <Heading
            position={'relative'}
            mb={{ base: '1rem', md: '2rem' }}
            fontSize={{ base: '1.5rem', lg: '2.5rem' }}
            _before={{
              content: `''`,
              position: 'absolute',
              right: '0',
              left: '0',
              bottom: '-1px',
              height: '3px',
              backgroundColor: 'teal.200'
            }}>
            Our Culture
          </Heading>
          <Text
            fontSize={{ base: '1rem', lg: '1.25rem', xl: '1.5rem' }}>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
          </Text>
        </Center>
      </Box>
    </>
  )
}

export default Page