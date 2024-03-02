import { DeleteIcon } from "@chakra-ui/icons"
import { Button, Checkbox, Wrap } from "@chakra-ui/react"
import { TItemList } from "../type"

const ItemList = ({ id, title, isDone, onIsDone, onDelete }: TItemList) => {

  return (
    <Wrap id={id} justify='space-between' mb='1rem'>
      <Checkbox onChange={() => onIsDone(id)} size={['md', 'lg']} colorScheme='green' isChecked={isDone}>
        { title }
      </Checkbox>
      <Button onClick={() => onDelete(id)} size='base' colorScheme='red' variant='outline'>
        <DeleteIcon />
      </Button>
    </Wrap>
  )
}

export default ItemList