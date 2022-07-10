import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../../common/svg'
import { Link } from 'react-router-dom'
import Gnb from './Gnb'

function Hedaer() {
  return (
    <Wrapper>
        <Inner>
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
`
export default Hedaer