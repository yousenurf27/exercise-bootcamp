import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Alert,
  AlertIcon,
  Box,
  AlertTitle,
  AlertDescription,
  CloseButton,
  useDisclosure,
  Flex,
} from '@chakra-ui/react'
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchUsers } from '../features/user/userSlice';
import { Users } from '../interface';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const users = useAppSelector((state) => state.users.users);
  const dispatch = useAppDispatch();
  const { isOpen: isVisible, onOpen, onClose } = useDisclosure({ defaultIsOpen: false })

  useEffect(() => {
    dispatch(fetchUsers());
    if(location.state?.status) {
      onOpen()
      window.history.replaceState({}, '')
    }
  }, [])
  return (
    <>
      {isVisible && (
        <Alert
        status='success'
        variant={"solid"}
        maxW={['base', 'base', '3xl']}
        margin={'auto'}
        justifyContent={"space-between"}>
          <Flex align={"center"}>
            <AlertIcon />
            <Box>
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription>
                Yuhuu! Now, your data was register.
              </AlertDescription>
            </Box>
          </Flex>
          <CloseButton
            alignSelf='flex-start'
            position='relative'
            right={-1}
            top={-1}
            onClick={onClose}
          />
        </Alert>
      )}
      <TableContainer maxH={"100vh"} overflowY={"auto"} maxW={['base', 'base', '3xl']} margin={'auto'}>
        <Table variant='striped' colorScheme='whiteAlpha'>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Password</Th>
            </Tr>
          </Thead>
          <Tbody>
          {users.map(
            (u: Users) => (
            <Tr key={u.id}>
              <Td>{u.name}</Td>
              <Td>{u.email}</Td>
              <Td>{u.password}</Td>
            </Tr>
          ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Home