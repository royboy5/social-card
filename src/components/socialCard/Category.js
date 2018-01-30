import React from 'react'
import styled from 'styled-components'

const CategoryWrapper = styled.div`
  background-color: #eeeeee;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;  
  height: 100%;
`

const Icon = styled.i`
    color: ${props => props.color || '#000'};
`

const Category = ({cat, color, icon}) => {
  return (
    <CategoryWrapper>
      <Icon className={`fa fa-2x ${icon}`} color={color} aria-hidden='true' />
      <p>{cat}</p>
    </CategoryWrapper>
  )
}

export default Category
