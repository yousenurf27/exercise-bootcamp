import { DeleteIcon } from "@chakra-ui/icons"
import { Button, Checkbox, Wrap } from "@chakra-ui/react"
import { useAppDispatch } from '../app/hooks'
import { deleteTodo, updateTodo } from "../features/todo/todoSlice"
import { ITodo } from "../interface"

const ItemList = ({ id, title, isDone }: ITodo) => {
  const dispatch = useAppDispatch();

  return (
    <Wrap id={id} justify='space-between' mb='1rem'>
      <Checkbox onChange={() => dispatch(updateTodo(id))} size={['md', 'lg']} colorScheme='green' isChecked={isDone}>
        { title }
      </Checkbox>
      <Button onClick={() => dispatch(deleteTodo(id))} size={['sm', 'base']} colorScheme='red' variant='outline'>
        <DeleteIcon />
      </Button>
    </Wrap>
  )
}

export default ItemList