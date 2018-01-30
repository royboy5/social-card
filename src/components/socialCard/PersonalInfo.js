import React from 'react'
import ListItem from './ListItem'

const PersonalInfo = (props) => {
  console.log(props)
  return (
    <ListItem color={'#ff0000'} cat={props.cat} icon='fa-user-circle-o'>
      <h1>{props.info.name}</h1>
      <h3>{props.info.title}</h3>
    </ListItem>
  )
}

export default PersonalInfo
