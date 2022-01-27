import React from 'react'
import { useParams } from 'react-router-dom'

function Post(props) {
  const params = useParams()
  console.log('params',params)
  return (
    <div>post page</div>
  )
}

export default Post