import React from 'react'
import PropTypes from 'prop-types'
import SocialCardWrapper from './socialCard/SocialCardsWrapper'
import PersonalInfo from './socialCard/PersonalInfo'
import ContactInfo from './socialCard/ContactInfo'

const SocialCard = props => {
  return (
    <SocialCardWrapper>
      <PersonalInfo info={props.user.personal} cat={'Personal Information'} />
      <ContactInfo info={props.user.contact} cat={'Contact'} />
    </SocialCardWrapper>
  )
}

SocialCard.propTypes = {
  user: PropTypes.object.isRequired
}

export default SocialCard
