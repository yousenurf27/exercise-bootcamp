import { Button, Container, Heading, Input, Text } from '@chakra-ui/react'
import ItemList from '../components/ItemList'
import React, { useRef, useState } from 'react'
import { TTodo } from '../type'

const data = [
  {
    id: '12313',
    title: 'sadfas',
    isDone: true,
  },
  {
    id: '1234897',
    title: 'scxvz',
    isDone: false,
  }
]

const Home = () => {
  const [todo, setTodo] = useState<TTodo[]>(data);
  const inputTask = useRef<HTMLInputElement>(null);

  const onSubmitTask = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    if(inputTask && inputTask.current) {
      const title = inputTask.current.value;
      
      if(title){
        setTodo((prevTodo) => [
          ...prevTodo,
          {
            id: String(+new Date()),
            title,
            isDone: false,
          }
        ]);
    
        inputTask.current.value = "";
      }
    }
  }

  const onIsDoneHandler = (id: string) => {
    const newTodo = todo.map(td => td.id == id ? {...td, isDone: !td.isDone} : td);
    setTodo(newTodo);
  }

  const onDeleteHandler = (id: string) => {
    const newTodo = todo.filter(td => td.id != id);
    setTodo(newTodo);
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
          todo.map((td) => (
          <ItemList
            key={td.id}
            {...td}
            onIsDone={onIsDoneHandler}
            onDelete={onDeleteHandler}/>
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
          Done: {todo.filter(td => td.isDone == true).length}
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
          onClick={onSubmitTask}>
          ADD TASK
        </Button>
      </Container>
    </>
  )
}

export default Home