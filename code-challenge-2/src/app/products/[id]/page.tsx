"use client"

import Breadcumb from "@/components/Breadcumb"
import TestimoniCart from "@/components/TestimoniCart"
import useProducts from "@/hooks/useProducts"
import { IFurniture, ITestimonis } from "@/interface"
import { formatPrice, furnitures, testimonis } from "@/utils"
import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Text
} from "@chakra-ui/react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const Page = ({params}: {params: {id: string}}) => {
  const { dataProducts: data, dataPaths } = useProducts(params.id)
  const [dataTestimonis, setDataTestimonis] = useState<ITestimonis[]>()
  
  useEffect(() => {
    setDataTestimonis(testimonis)
  }, [params.id])
  return (
    <>
      <Box
        px={{ base: 'unset', lg: '3rem', xl: '4rem'}}
        mb={'2rem'}>
        {dataPaths && (
          <Breadcumb props={dataPaths} />
        )}
        <Grid
          pt={'1rem'}
          gridTemplateColumns={'repeat(auto-fit, minmax(300px, 1fr))'}
          gap={6}>
            {data && (
              <>
                <GridItem
                  w={'100%'}
                  h={{ base: '300px', lg: '350px', xl: '400px' }}
                  position={'relative'}>
                    <Image
                      priority={true}
                      fill
                      sizes='max-height: 500px'
                      style={{
                        objectFit: 'cover',
                        borderRadius: '1rem'
                      }}
                      src={data[0].image}
                      alt={data[0].title}/>
                </GridItem>
                <GridItem>
                  <Heading
                    w={'fit-content'}
                    mb={'1.5rem'}
                    position={'relative'}
                    _before={{
                      content: `''`,
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: -1,
                      height: '2px',
                      backgroundColor: 'var(--chakra-colors-teal-400)'
                    }}>
                    {data[0].title}
                  </Heading>
                  <Text
                    mb={'1.25rem'}
                    fontSize={'1.875rem'}
                    color='teal.600'>
                    {formatPrice(data[0].price)}
                  </Text>
                  <Text
                    fontSize={['1rem', '1.375rem']}>
                    {data[0].description}
                  </Text>
                </GridItem>
              </>
            )}
        </Grid>
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
  )
}

export default Page