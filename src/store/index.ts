/*
 * @Author: Andrew Q
 * @Date: 2022-05-15 18:33:10
 * @LastEditors: Andrew Q
 * @LastEditTime: 2022-05-15 18:56:46
 * @Description: 
 */
import { configureStore } from '@reduxjs/toolkit'
import colorReducer from './color'


export const store = configureStore({
  reducer: {
    color: colorReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
