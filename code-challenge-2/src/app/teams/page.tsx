"use client"

import TeamCart from '@/components/TeamCart'
import useTeams from '@/hooks/useTeams'
import { Box, Center, Grid, Heading } from '@chakra-ui/react'

const Page = () => {
  const { data: dataUsers } = useTeams()
  return (
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
        templateColumns='repeat(auto-fit,  minmax(250px, 1fr))' gap={6}>
          {dataUsers?.results.map((props: any) => (
            <TeamCart
              key={props.id.value}
              props={props}/>
          ))}
      </Grid>
    </Box>
  )
}

export default Page