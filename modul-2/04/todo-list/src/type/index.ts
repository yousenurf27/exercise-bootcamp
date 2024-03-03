export type TTodo = {
  id: string,
  title: string,
  isDone: boolean,
}

export type TItemList = {
  onIsDone: (id: string) => void,
  onDelete: (id: string) => void,
}