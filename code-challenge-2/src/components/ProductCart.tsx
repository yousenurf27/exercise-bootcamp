import { IFurniture } from '@/interface'
import { formatPrice } from '@/utils'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

const ProductCart = ({props} : {props: IFurniture}) => {
  return (
    <Card maxW='lg'>
      <CardBody>
        <Center
          w={'100%'}
          position={'relative'}
          h={{ base: '200px', lg: '200px', xl: '250px' }}>
          <Image
            quality={50}
            priority={true}
            fill
            sizes="(max-width: 359px)"
            style={{
              objectFit: 'cover',
              borderRadius: '1rem'
            }}
            src={props.image}
            alt={props.title}
          />
        </Center>
        <Stack mt='6' spacing='3'>
          <Heading size={'md'}>{props.title}</Heading>
          <Text fontSize={['sm', 'md']}>
            {props.description}
          </Text>
          <Text color='teal.600' fontSize={'2xl'}>
            {formatPrice(props.price)}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link href={`/products/${props.id}`}>
          <Button variant='solid' colorScheme='teal'>
            See Detail
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default ProductCart