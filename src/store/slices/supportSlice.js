import { createSlice } from '@reduxjs/toolkit'
import { supportInitialState } from '../initialState'

const configMessage = (message,chapters,status) => {
  let newMessage = {... message, chapter: chapters[message.chapter], state: status[message.state]}
  for (const property  in message) {
    console.log(`${property}: ${message[property]}`);
  }
  console.log('chapters: ', chapters)
  console.log('status: ', status)
  console.log('newMessage: ', newMessage)
  return message
}

const supportSlice = createSlice({
  name: 'support ',
  initialState: supportInitialState,
  reducers: {
    setLoading: state => {
      state.isLoading = true
    },
    setLoaded: state => {
      state.isLoading = false
    },
    setMessages: (state, action) => {
      state.messages= action.payload.data.map(message =>{
        message.key = message.id
        return message
      })
    },
    setMessage: (state, action )=> {
      console.log('set message action', action)
      configMessage(action.payload.data,state.chapters,state.messageStatus)
      // state.message.data = action.payload.data
      state.message.data = {... action.payload.data, chapter: state.chapters[action.payload.data.chapter], state: state.messageStatus[action.payload.data.state]}
    },
    setMessageLoading: state => {
      state.message.isLoading = true
    },
    setMessageLoaded: state => {
      state.message.isLoading = false
    },
  },
})
export const { setLoading, setLoaded, setMessages,setMessage,setMessageLoaded,setMessageLoading } =
  supportSlice.actions
export const selectIsLoading = state => state.isLoading
export const selectMessages = state => state.messages
export default supportSlice.reducer
