import React from 'react'
import { NavLink } from 'react-router-dom'

function Posts(props) {
  return (
    <div>
      <h3>posts page</h3>
      <NavLink to={'post/23'} > Post 23</NavLink>
      <NavLink to={'post/24'} > Post 24</NavLink>
      <NavLink to={'post/25'} > Post 25</NavLink>
      <NavLink to={'post/26'} > Post 26</NavLink>
    </div>
  )
}

export default Posts