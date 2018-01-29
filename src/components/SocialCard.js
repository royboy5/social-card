import React from 'react'
import PropTypes from 'prop-types'
import SocialCardWrapper from './socialCard/SocialCardsWrapper'
import PersonalInfo from './socialCard/PersonalInfo'

const SocialCard = props => {
  return (
    <SocialCardWrapper>
      <PersonalInfo info={props.user.personal} />
    </SocialCardWrapper>
  )
}

SocialCard.propTypes = {
  user: PropTypes.object.isRequired
}

export default SocialCard
