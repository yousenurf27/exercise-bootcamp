export interface Users {
  id: string,
  name: string,
  email: string,
  password: string,
}

export interface UsersState {
  users: Users[],
}