import styled from 'styled-components'

const SocialCardWrapper = styled.div`
    height: 300px;
    min-width: 320px;
    background-color: ${props => props.color || 'blue'};
    ${props => props.bg && `background-image: url(${props.bg});`} 
    background-repeat: no-repeat;
    background-position: center;
`

export default SocialCardWrapper
