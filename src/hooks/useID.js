import { useSelector } from 'react-redux'

const useID = () => {
  return useSelector(state => state.profile.data.id)
}

export { useID }
