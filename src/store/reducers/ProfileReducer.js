import { GET_PROFILE_INFORMATION } from '../actions/ProfileActions'
import { profileInitialState } from '../initialState'

const profileReducer = (state = profileInitialState, action) => {
  switch (action.type) {
    case GET_PROFILE_INFORMATION: {
      let body = action.newPostBody
      let newPost = {
        id: 5,
        message: body,
        likes: 0,
        dislikes: 0,
        date: new Date().toLocaleString(),
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
      }
    }
    default:
      return { ...state }
  }
}

export const getUser = userId => {
  return dispatch => {
    dispatch(setIsLoading(true))
    usersAPI
      .getUser(userId)
      .then(response => {
        dispatch(setUserProfile(response.data))
        dispatch(setIsLoading(false))
      })
      .catch(error => console.error('Error', error))
  }
}
export const getStatus = userId => {
  return dispatch => {
    profileAPI
      .getStatus(userId)
      .then(response => {
        dispatch(setStatus(response.data))
      })
      .catch(error => console.error('Error', error))
  }
}
export const updateStatus = status => {
  return dispatch => {
    profileAPI
      .updateStatus(status)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setStatus(status))
        }
      })
      .catch(error => console.error('Error', error))
  }
}

export const addPostActionCreator = newPostBody => ({
  type: ADD_POST,
  newPostBody,
})

export const setStatus = status => ({ type: SET_STATUS, status })
export const setIsLoading = status => ({
  type: SET_IS_LOADING,
  isLoading: status,
})
export const setUserProfile = profile => ({
  type: SET_USER_PROFILE,
  profile,
})
export default profileReducer
