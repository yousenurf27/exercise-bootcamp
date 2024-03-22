"use client"

import ProductCart from "@/components/ProductCart"
import useProducts from "@/hooks/useProducts"
import { Button, Grid, HStack, Heading, Input, Stack } from "@chakra-ui/react"

const Page = () => {
  const { dataProducts, onSearch, searchRef } = useProducts()
  return (
    <>
      <Stack
        mb={['2rem']}
        pt={'1rem'}
        spacing={4}
        justify={'space-between'}
        direction={[ 'column', 'row' ]}>
        <Heading
          fontSize={{ base: '1.5rem', lg: '2rem' }}>
          Products
        </Heading>
        <HStack
          w={{ xl: '350px' }}>
          <Input
            ref={searchRef}
            variant='outline' placeholder='Search product' colorScheme="teal" />
          <Button
            onClick={onSearch}
            variant='outline' colorScheme='teal'>
            Search
          </Button>
        </HStack>
      </Stack>
      <Grid
        mb={['2rem']}
        templateColumns='repeat(auto-fill, minmax(min(300px, 100%), 1fr))' gap={4}>
        {dataProducts?.map((props) => (
          <ProductCart 
            key={props.id}
            props={props}/>
        ))}
      </Grid>
    </>
  )
}

export default Page