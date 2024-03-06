import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { usersApi } from '../../api'
import { Users, UsersState } from '../../interface';

const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await usersApi.get('/');
    return response.data;
  },
)

const addUser = createAsyncThunk(
  'users/registerUser',
  async (data: Users) => {
    await usersApi.post('/', data)
  }
)

const initialState: UsersState = {
  users: [],
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload
    })
    builder.addCase(addUser.fulfilled, () => {})
  },
})

export { fetchUsers, addUser }

export default usersSlice.reducer