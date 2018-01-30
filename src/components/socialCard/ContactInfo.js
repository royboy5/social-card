import React from 'react'
import ListItem from './ListItem'

const ContactInfo = (props) => {
  console.log(props)
  return (
    <ListItem color={'#ffa500'} cat={props.cat} icon='fa-phone-square'>
      <p>{props.info.phone}</p>
      <p>{props.info.fax}</p>
      <p>{props.info.mobile}</p>
    </ListItem>
  )
}

export default ContactInfo
