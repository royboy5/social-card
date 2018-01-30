import React from 'react'
import ListItem from './ListItem'

const AddressInfo = (props) => {
  console.log(props)
  return (
    <ListItem color={'#fff125'} cat={props.cat} icon='fa-map-marker'>
      <p>{props.info.add1}</p>
      <p>{props.info.add2}</p>
      <p>{props.info.city}</p>
      <p>{props.info.state}</p>
      <p>{props.info.zip}</p>
    </ListItem>
  )
}

export default AddressInfo
