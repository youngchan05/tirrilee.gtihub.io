import React from 'react'
import styled, { css } from 'styled-components'
import { IconMenu, Logo, IconMenuClose, IconBack } from '../../../common/svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Gnb from './Gnb'
import { useState } from 'react'
import ContentBox from './ContentBox'

function Hedaer() {
  const [ isActive , setIsActive] = useState(false);
  const onToggleActive =  () => setIsActive(false);
  const location = useLocation();
  const locationLength = location.pathname.split('/').length
  const navigate = useNavigate()
  return (
    <Wrapper isActive={isActive}>
        <ContentBox>
            {
              locationLength > 2 ? <button onClick={() => navigate(-1)}>
                  <IconBack/>
              </button>
              :
              <button onClick={()=> setIsActive(!isActive)} type="button" className='isTablet'>
                {
                  isActive ? <IconMenuClose/> : <IconMenu/>
                }
              </button>
            }
            <h1>
              <Link to="/"><Logo/></Link>
            </h1>
            <Gnb onToggleActive={onToggleActive} isActive={isActive}/>
        </ContentBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    position:fixed;
    left:0;
    top:0;
    width:100%;
    background-color: rgba(255, 255, 255, 0.8);
    .contentBox {
      display:flex;
      align-items: center;
      h1 {
        margin-right:auto;
        svg {
          width:86px;
          height:24px;
        }
      }
      ${({theme}) => {
        const { mobile,tablet, contents} = theme;
        return css`
          @media screen and ${contents} {
            box-sizing: border-box;
          }
          @media screen and ${tablet} {
            ${tabletStyle}
          }
          @media screen and ${mobile} {
            ${mobileStyle}
          }
        `
      }}
    }
    .
`


const tabletStyle =  css`
    height:54px;
    padding:0 30px;
  h1 {
    margin: auto;
  }
`

const mobileStyle =  css`
  padding:0 20px;
`
export default Hedaer