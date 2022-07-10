import React from 'react'
import styled from 'styled-components'

function TextTag({text}) {
  return (
    <Wrapper>{text}</Wrapper>
  )
}

const Wrapper = styled.div`
    padding: 0 10px;
    border-radius: 8px;
    background-color: #eff1f4;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.5;
    text-align: center;
    color: #5a5e6a;
`
export default TextTag