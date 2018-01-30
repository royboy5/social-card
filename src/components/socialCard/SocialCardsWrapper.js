import styled from 'styled-components'

const SocialCardWrapper = styled.article`
    display: grid;
    background-color: ${props => props.color || '#fff'};
`

export default SocialCardWrapper
