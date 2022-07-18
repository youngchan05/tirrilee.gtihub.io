import React from 'react'
import styled, { css } from 'styled-components'

function Button({children,  type, disabled, className, size, buttonTheme, onClick}) {
  return (
    <Wrapper onClick={onClick} size={size} buttonTheme={buttonTheme} type={type || 'button'} disabled={disabled} className={className}>{children}</Wrapper>
  )
}

const Wrapper = styled.button`
  ${props => {
    const theme = props.buttonTheme ? props.theme.button.theme[props.buttonTheme] : props.theme.button.theme['default']
    const size = props.size ? props.theme.button.size[props.size] : props.theme.button.size['xl']
    return {
      ...theme,
      ...size,
      transition: 'all ease-in .2s',
      fontWeight:' 600',
      textAlign: 'center',
      borderRadius:'8px',
    }
  }
}
  &:disabled {
    ${props => {
      const theme = props.buttonTheme ? props.theme.button.theme[props.buttonTheme] : props.theme.button.theme['default']
      if(theme.disabled){
        return {
          background:theme.disabled.backgroundColor,
          color:theme.disabled.color,
        }
      }
    }}
  }
  &:not(:disabled):hover {
    ${props => {
      const theme = props.buttonTheme ? props.theme.button.theme[props.buttonTheme] : props.theme.button.theme['default']
      if(theme.hover){
        return {
          background:theme.hover.backgroundColor,
        }
      }
    }}
  }
  ${({theme}) => {
    const { mobile,tablet} = theme;
    return css`
        @media screen and ${mobile} {
          width:100%;
        }
    `
  }}
`
export default Button