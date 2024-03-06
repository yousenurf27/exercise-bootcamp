import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack
} from "@chakra-ui/react"

import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../app/hooks";
import { addUser } from "../features/user/userSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const registerSchema = Yup.object({
  name: Yup.string().required().min(6),
  email: Yup.string().required().email(),
  password: Yup.string().required().min(6),
});

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  
  const formik = useFormik({
    validationSchema: registerSchema,
    initialValues: {
      id: nanoid(16),
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(addUser(values))
      navigate("/", { state: { status: "success" }})
    }
  });
  return (
    <Flex align="center" justify="center" h="100vh">
      <Box bg="gray.800" p={6} rounded="md">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={6} align="flex-start">
            <FormControl isInvalid={formik.touched.name && formik.errors.name ? true : false}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                name="name"
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                color={"gray.800"}
                _focus={{ color: 'gray.100' }}
              />
              {formik.touched.name && formik.errors.name ? (
                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
              ) : null}
            </FormControl>
            <FormControl isInvalid={formik.touched.email && formik.errors.email ? true : false}>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                variant="filled"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                color={"gray.800"}
                _focus={{ color: 'gray.100' }}
              />
              {formik.touched.email && formik.errors.email ? (
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              ) : null}
            </FormControl>
            <FormControl isInvalid={formik.touched.password && formik.errors.password ? true : false}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                variant="filled"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                color={"gray.800"}
                _focus={{ color: 'gray.100' }}
              />
              {formik.touched.password && formik.errors.password ? (
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              ) : null}
            </FormControl>
            <Button type="submit" colorScheme="purple" width="full">
              Login
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  )
}

export default Register