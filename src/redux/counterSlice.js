import {createSlice} from "@reduxjs/toolkit";


export const counterSlice = createSlice({
  name: 'counter',

  initialState: {
    value: 0
  },

  reducers: {
    plus: (state) => {
      state.value += 1
    },
    minus: (state) => {
      state.value -= 1
    },
    inputPlus: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { plus, minus, inputPlus } = counterSlice.actions

//Selectors
export const selectCounter = (state) => state.counter.value

export const counterReducer = counterSlice.reducer