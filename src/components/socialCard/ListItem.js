import React from 'react'
import styled from 'styled-components'

import Category from './Category'

const ListItemWrapper = styled.section`
    padding-left: 25px;
    border-left: 25px solid ${props => props.color || '#fff'};
    border-bottom: 1px solid black;
`

const ListItem = (props) => {
  // TODO: Add category and icon to the list item
  return (
    <ListItemWrapper color={props.color}>
      <Category />
      {props.children}
    </ListItemWrapper>
  )
}

export default ListItem
