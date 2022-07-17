import React from 'react'
import styled, { css } from 'styled-components'
import { IconMenu, Logo } from '../../../common/svg'
import { Link } from 'react-router-dom'
import Gnb from './Gnb'

function Hedaer() {
  return (
    <Wrapper>
        <Inner>
            <button type="button" className='isTablet'>
              <IconMenu/>
            </button>
            <h1>
              <Link to="/"><Logo/></Link>
            </h1>
            <Gnb/>
        </Inner>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    position:fixed;
    left:0;
    top:0;
    width:100%;
    background-color: rgba(255, 255, 255, 0.8);
`

const Inner = styled.div`
    display:flex;
    align-items: center;
    width:100%;
    max-width:1156px;
    margin:0 auto;
    h1 {
      margin-right:auto;
      svg {
        width:86px;
        height:24px;
      }
    }
    ${({theme}) => {
      const { mobile,tablet} = theme;
      return css`
        @media screen and ${tablet} {
          ${tabletStyle}
        }
        @media screen and ${mobile} {
          ${mobileStyle}
        }
      `
    }}
`

const tabletStyle =  css`
    height:54px;
    padding:0 30px;
  h1 {
    margin: auto;
  }
`

const mobileStyle =  css`

`
export default Hedaer