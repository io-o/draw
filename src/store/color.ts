/*
 * @Author: Andrew Q
 * @Date: 2022-05-15 18:34:18
 * @LastEditors: Andrew Q
 * @LastEditTime: 2022-05-15 19:44:02
 * @Description: 
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ColorState {
  color: string
  time: number
}

const initialState: ColorState = {
  color: 'black',
  time: +new Date(),
}

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    changeColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload
    },
    reset: (state) => {
      state.color = 'black'
      state.time = +new Date()
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeColor, reset } = colorSlice.actions

export default colorSlice.reducer
