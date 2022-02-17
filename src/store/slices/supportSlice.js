import { createSlice } from '@reduxjs/toolkit'
import { supportInitialState } from '../initialState'
import { v4 as uuid } from 'uuid'

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
      state.messages = action.payload.data.map(message => {
        message.key = uuid()
        return message
      })
    },
    setMessage: (state, action) => {
      // configMessage(action.payload.data,state.chapters,state.messageStatus)
      // state.message.data = action.payload.data
      state.message.data = {
        ...action.payload.data,
        chapter: state.chapters[action.payload.data.chapter],
        state: state.messageStatus[action.payload.data.state],
      }
    },
    setReply: (state, action) => {
      console.log('some action', action)
      state.message.data.msgs_reply.push(action.payload.data)
    },
    setMessageLoading: state => {
      state.message.isLoading = true
    },
    setMessageLoaded: state => {
      state.message.isLoading = false
    },
    setNewMessageLoading: state => {
      state.newMessage.isLoading = true
    },
    setNewMessageLoaded: state => {
      state.newMessage.isLoading = false
    },
    setNewMessageIsAdded: state => {
      state.newMessage.isAdded = true
    },
    setNewMessageIsNotAdded: state => {
      state.newMessage.isAdded = false
    },
    addNewMessage: (state, action) => {
      const msg = action.payload.data
      state.messages.push({
        key: msg.id,
        id: msg.id,
        state: msg.state,
        subject: msg.subject,
        date: msg.date,
      })
    },
  },
})
export const {
  setLoading,
  setLoaded,
  setMessages,
  setMessage,
  setMessageLoaded,
  setMessageLoading,
  setNewMessageLoading,
  setNewMessageLoaded,
  setNewMessageIsAdded,
  setNewMessageIsNotAdded,
  addNewMessage,
  setReply,
} = supportSlice.actions
export const selectIsLoading = state => state.isLoading
export const selectMessages = state => state.messages
export default supportSlice.reducer
