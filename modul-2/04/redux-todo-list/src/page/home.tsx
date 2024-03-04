import { Button, Container, Heading, Input, Text } from '@chakra-ui/react'
import ItemList from '../components/ItemList'
import React, { useRef } from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { addTodo } from '../features/todo/todoSlice'

const Home = () => {
  const inputTask = useRef<HTMLInputElement>(null);

  const todos = useAppSelector((state) => state.todo.todos);
  const dispatch = useAppDispatch();

  const onSubmitTask = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    if(inputTask && inputTask.current) {
      const title = inputTask.current.value;
      
      if(title){
        dispatch(addTodo(title));
    
        inputTask.current.value = "";
      }
    }
  }

  return (
    <>
      <Container size={{base: 'base', md: 'md'}}>
        <Heading
          as="h1"
          fontWeight={'500'}
          fontSize={{ base: '24px', md: '40px', lg: '56px' }}
          textAlign={'center'}
          marginBottom='1.5rem'>
          Chores ToDo List
        </Heading>
        {
          todos.map((td) => (
          <ItemList
            key={td.id}
            {...td}/>
          ))
        }
      </Container>
      <span className="w-full h-0 block border-y-2 border-gray-600 mb-4"></span>
      <Container size={{base: 'base', md: 'md'}}>
        <Text
          mb='1rem'
          fontWeight={'500'}
          fontSize={{ base: '18px', md: '20px', lg: '26px' }}
          textAlign={'center'}>
          Done: {todos.filter(td => td.isDone == true).length}
        </Text>
        <Text mb='8px'>Add todo</Text>
        <Input
          mb='1rem'
          ref={inputTask}
          size={['sm', 'md']}
          type='text'
        />
        <Button
          colorScheme='teal'
          variant='solid'
          size={['sm', 'md']}
          onClick={(e) => onSubmitTask(e)}>
          ADD TASK
        </Button>
      </Container>
    </>
  )
}

export default Home