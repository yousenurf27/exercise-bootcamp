import { Avatar, Box, Card, CardBody, CardHeader, Flex, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const TeamCart = ({props}: {props: any}) => {
  return (
    <Card maxW='md'>
      <CardHeader>
        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap' flexDir='column'>
          <Avatar size='lg' name={props.name.first +' '+ props.name.last} src={props.picture.medium} />

          <Box>
            <Heading size='sm' textAlign='center'>{props.name.first +' '+ props.name.last}</Heading>
            <Text textAlign='center'>{props.location.city}</Text>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody>
        <VStack>
          <HStack>
            <Text>Title:</Text>
            <Text>{props.name.title}</Text>
          </HStack>
          <HStack>
            <Text>Email:</Text>
            <Text>{props.email}</Text>
          </HStack>
          <HStack>
            <Text>Phone:</Text>
            <Text>{props.phone}</Text>
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  )
}

export default TeamCart