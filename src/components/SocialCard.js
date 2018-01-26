import React from 'react'
import PropTypes from 'prop-types'
import SocialCardWrapper from './socialCards/SocialCardsWrapper'

const SocialCard = props => {
  const imgPath = `images/${props.image}`
  return (
    <SocialCardWrapper bg={imgPath}>

      <div>{props.title}</div>
      <div>{props.desc}</div>
      {props.email && <div>{props.email}</div>}
      {props.fb && <div>{props.fb}</div>}
      {props.ig && <div>{props.ig}</div>}
      {props.tw && <div>{props.tw}</div>}

    </SocialCardWrapper>
  )
}

SocialCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  email: PropTypes.string.isRequired,
  fb: PropTypes.string,
  ig: PropTypes.string,
  tw: PropTypes.string
}

SocialCard.defaultProps = {
  image: 'logo.svg',
  title: 'title',
  desc: 'description'
}

export default SocialCard

// TODO: Image / Title / Description of card / Social Media Networks
