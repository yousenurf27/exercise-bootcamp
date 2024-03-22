import { ITestimonis } from '@/interface'
import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Text
} from '@chakra-ui/react'

const TestimoniCart = ({props} : {props : ITestimonis}) => {
  return (
    <Card maxW='lg'>
      <CardHeader>
        <Flex>
          <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Avatar name={`${props.name}`} src='' />

            <Box>
              <Heading size='sm'>{props.name}</Heading>
              <Text>{props.address}</Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>
          {props.comment}
        </Text>
      </CardBody>
    </Card>
  )
}

export default TestimoniCart