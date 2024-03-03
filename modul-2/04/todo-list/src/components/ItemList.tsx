import { DeleteIcon } from "@chakra-ui/icons"
import { Button, Checkbox, Wrap } from "@chakra-ui/react"
import { TItemList, TTodo } from "../type"

const ItemList = ({ id, title, isDone, onIsDone, onDelete }: TTodo & TItemList) => {

  return (
    <Wrap id={id} justify='space-between' mb='1rem'>
      <Checkbox onChange={() => onIsDone(id)} size={['md', 'lg']} colorScheme='green' isChecked={isDone}>
        { title }
      </Checkbox>
      <Button onClick={() => onDelete(id)} size={['sm', 'base']} colorScheme='red' variant='outline'>
        <DeleteIcon />
      </Button>
    </Wrap>
  )
}

export default ItemList