import { createSlice } from '@reduxjs/toolkit'

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    value: [],
  },
  reducers: {    
    storeData: (state, action) => {
        state.value = [...state.value, action.payload]
        //state.items.push(action.payload);
        //console.log(state.value);
      //console.log(action.payload);
    },
    timeout: (state, action) => {
      // console.log(action.payload.index)
      const value = state.value[action.payload.index]
      if (value.time > 0) {
        let newObject = { ...value, time: value.time - 1, status: value.time===1?'success':'pending' }
        const newState = state.value.map((item, index) => {
          if (index === action.payload.index) {
            return newObject;
          }
          return item
        })
        state.value = newState
      }

    }
  },
})

export const { storeData, timeout } = orderSlice.actions

export const selectCount = (state) => state.order.value

export default orderSlice.reducer