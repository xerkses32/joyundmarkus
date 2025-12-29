import { configureStore } from '@reduxjs/toolkit'

// Dummy reducer - replace with actual reducers when needed
const dummyReducer = (state = {}) => state

export const store = configureStore({
	reducer: {
		dummy: dummyReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

