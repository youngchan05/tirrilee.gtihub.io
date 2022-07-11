import React from 'react'
import styled from 'styled-components'

function SubTit({text, }) {
  return (
    <Wrapper className='subTit'>{text}</Wrapper>
  )
}

const Wrapper = styled.strong`
    display:inline-block;
    font-size: 32px;
    font-weight: bold;
    line-height: 1.5;
    color: #000;
`
export default SubTit