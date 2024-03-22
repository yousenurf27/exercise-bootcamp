"use client"

import ProductCart from "@/components/ProductCart";
import TestimoniCart from "@/components/TestimoniCart";
import useProducts from "@/hooks/useProducts";
import { ITestimonis } from "@/interface";
import { testimonis } from "@/utils";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  Highlight,
  Text 
} from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const { dataProducts: data } = useProducts()
  const [dataTestimonis, setDataTestimonis] = useState<ITestimonis[]>()

  useEffect(() => {
    setDataTestimonis(testimonis)
  }, [])
  return (
    <>
      <Flex
        mb={{ base: '1.5rem', md: '3rem' }}
        minH={{ base: '45vh', md: '35vh', xl: '88vh'}}
        flexDir={{ base: 'column-reverse', md: 'row' }}>
        <Center w={{ base: '100%', md: '50%'}}
          flexDirection={'column'} alignItems={'start'}
          pr={{ base: 'unset', md: '.5rem', xl: 'unset' }}>
          <Heading fontSize={{ base: '2rem', md: '2.5rem', xl: '3rem' }}
            mb={{ base: '0.5rem', md: '1rem'}}
            lineHeight={{lg: '3.5rem', xl: '4rem'}}>
            Make your home more
            <br />
            <Highlight
              query={'beautiful'}
              styles={{ px: 3, py: 0.5, rounded: 'lg', bg: 'teal.200', color: 'white' }}>
              beautiful
            </Highlight>
            <br />
            with our furniture
          </Heading>
          <Text fontSize={{ base: '.875rem', md: '1rem', xl: '1.25rem' }}>
            To further convince you, see our entire main page
          </Text>
        </Center>
        <Center mb={['1rem', 'unset']}
          w={{ base: '100%', md: '50%'}}
          flexGrow={1}
          position={'relative'}
          zIndex={-1}>
          <Image
            fill
            priority={true}
            quality={45}
            src='/images/banner.jpg'
            sizes="(max-width: 615px)"
            style={{
              objectFit: 'cover',
              borderRadius: '1rem'
            }}
            alt="X Interior" />
        </Center>
      </Flex>
      <Box
        mb={{ base: '1.5rem', md: '3rem' }}
        p={{ base: '2rem', md: '3rem', lg: '5rem', xl: '8rem' }}
        bg={'gray.100'}
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
            Our Overview
          </Heading>
          <Text
            fontSize={{ base: '1rem', lg: '1.25rem', xl: '1.5rem' }}>
            <Highlight
              query={'beautiful'}
              styles={{ px: 2, py: 0.5, rounded: 'lg', bg: 'teal.200', color: 'white' }}>
              Our company offers furnitures that can make the inside of your house look more beautiful and make you comfortable to stay at home longer.
              More than 10,000 customers are satisfied with our services, because we also offer a professional interior decoration team to help beautify the inside of your home.
            </Highlight>
          </Text>
        </Center>
      </Box>
      <Box
        py={{ base: '2rem', md: '3rem', lg: '5rem' }}
        px={'1rem'}>
        <Center>
          <Heading
            position={'relative'}
            mb={{ base: '1rem', md: '2.5rem' }}
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
            Our Products
          </Heading>
        </Center>
        <Grid
          templateColumns='repeat(auto-fit,  minmax(250px, 1fr))' gap={6}>
          {data?.map((props) => (
              <ProductCart 
                key={props.id}
                props={props}/>
            ))
          }
        </Grid>
        <Flex
          justify={'end'}
          alignItems={'flex-end'}
          mt={'2rem'}>
          <Button variant='outline' colorScheme='teal'>
            See More Products
          </Button>
        </Flex>
      </Box>
      <Box
        mb={{ base: '1.5rem', md: '3rem' }}
        py={{ base: '2rem', md: '3rem', lg: '5rem' }}
        px={'1rem'}
        borderRadius={'lg'}
        bg={'gray.100'}>
        <Center>
          <Heading
            position={'relative'}
            mb={{ base: '1rem', md: '2.5rem' }}
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
            Testimoni
          </Heading>
        </Center>
        <Grid
          templateColumns='repeat(auto-fit,  minmax(250px, 1fr))' gap={6}>
          {dataTestimonis?.map((props) => (
            <TestimoniCart
              key={props.id}
              props={props}/>
          ))}
        </Grid>
      </Box>
    </>
  );
}
