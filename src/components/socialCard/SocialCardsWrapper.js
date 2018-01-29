import styled from 'styled-components'

const SocialCardWrapper = styled.article`
    height: 300px;
    min-width: 320px;
    background-color: ${props => props.color || '#fff'};
`

export default SocialCardWrapper
