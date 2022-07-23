import React from 'react'
import styled from 'styled-components'

function TextTag({text ,type}) {
  return (
    <Wrapper type={type}>{text}</Wrapper>
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
    ${props => {
      const textTypeColor = {
        MVP:'var(--mvp);',
        product:'var(--product);',
        premium:'var(--primary-primary);',
      }
      return {
        color:props.type ? textTypeColor[props.type] : '#5a5e6a'
      }
    }}
`
export default TextTag