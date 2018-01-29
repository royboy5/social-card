import React from 'react'
import PropTypes from 'prop-types'
import SocialCardWrapper from './socialCard/SocialCardsWrapper'

const SocialCard = props => {
  const imgPath = `images/${props.image}`
  return (
    <SocialCardWrapper bg={imgPath}>

      <div>{props.title}</div>
      <div>{props.desc}</div>
      <div>{props.email}</div>

    </SocialCardWrapper>
  )
}

SocialCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  email: PropTypes.string.isRequired,
  social: PropTypes.object
}

SocialCard.defaultProps = {
  image: 'logo.svg',
  title: 'title',
  desc: 'description'
}

export default SocialCard

// TODO: Image / Title / Description of card / Social Media Networks
