import React from 'react'
import styled from 'styled-components'

function Title({text}) {
  return (
    <Wrapper className='contentTit'>{text}</Wrapper>
  )
}
const Wrapper = styled.div`
    font-size: 48px;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: var(--gray-scale-black);
`
export default Title