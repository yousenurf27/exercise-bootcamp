import { DeleteIcon } from "@chakra-ui/icons"
import { Button, Checkbox, Wrap } from "@chakra-ui/react"
import { TItemList } from "../type"

const ItemList = ({ id, title, isDone, onIsDone, onDelete }: TItemList) => {
  let Checkboxs;
  if(isDone) {
    Checkboxs = <Checkbox onChange={() => onIsDone(id)} size={['md', 'lg']} colorScheme='green' defaultChecked>
        { title }
      </Checkbox>
  } else {
    Checkboxs = <Checkbox onChange={() => onIsDone(id)} size={['md', 'lg']} colorScheme='green'>
        { title }
      </Checkbox>
  }
  return (
    <Wrap id={id} justify='space-between' mb='1rem'>
      {Checkboxs}
      <Button onClick={() => onDelete(id)} size='base' colorScheme='red' variant='outline'>
        <DeleteIcon />
      </Button>
    </Wrap>
  )
}

export default ItemList