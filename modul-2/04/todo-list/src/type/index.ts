export type TTodo = {
  id: string,
  title: string,
  isDone: boolean,
}

export type TItemList = {
  id: string,
  title: string,
  isDone: boolean,
  onIsDone: (id: string) => void,
  onDelete: (id: string) => void,
}