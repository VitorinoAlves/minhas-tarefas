import { configureStore } from '@reduxjs/toolkit'

import tarefasReducer from './reducers/tarefas'
import filtroReduer from './reducers/filtro'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducer,
    filtro: filtroReduer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
