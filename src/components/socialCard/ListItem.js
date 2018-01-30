import React from 'react'
import styled from 'styled-components'

import Category from './Category'

const ListItemWrapper = styled.section`
    display: grid;
    grid-template-columns: 100px 3fr;
    align-items: center;
    border-left: 25px solid ${props => props.color || '#fff'};
    border-bottom: 1px solid black;
`

const ListItemData = styled.div`
    padding-left: 25px;
`

const ListItem = (props) => {
  // TODO: Add category and icon to the list item
  return (
    <ListItemWrapper color={props.color}>
      <Category cat={props.cat} color={props.color} icon={props.icon}/>
      <ListItemData>
        {props.children}
      </ListItemData>
    </ListItemWrapper>
  )
}

export default ListItem
