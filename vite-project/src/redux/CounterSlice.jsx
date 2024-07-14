import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 50,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,

  reducer : {

  }
})

export const { } = counterSlice.actions

export default counterSlice.reducer