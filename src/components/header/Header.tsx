import React from 'react'
import { Link } from "react-router-dom";
import styled from '@emotion/styled'

const StyledHeader = styled.div({
  display: 'flex',
  backgroundColor: '#f5f5f5',
  borderBottom: '1px solid #ccc',
})

export const Header = () => {
  return (
    <StyledHeader>
      <Link to="/products/list">Products</Link>
      <Link to="/products/create">Create product</Link>
    </StyledHeader>
  )
}
