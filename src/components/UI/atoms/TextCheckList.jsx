import React from 'react'
import styled from 'styled-components'
import { IconCheck, IconCheckClose } from '../../../common/svg'

function TextCheckList({isActive,text}) {
  return (
    <Wrapper  isActive={ isActive} className='textCheckList'>
        <i className='iconCheck'>
        {
            isActive ? <IconCheck/> : <IconCheckClose/>
        }
        </i>
        <p className='checkText'>
            {text}
        </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display:flex;
    align-items: center;
    .iconCheck {
        margin-right:8px;
        flex:0 0 auto;
    }
    .checkText {
        font-size: 14px;
        font-style: normal;
        line-height: 1.7;
        text-align: center;
        color: ${props => props.isActive ? '#000' : '#9da0a8'};
    }
    +.textCheckList {
        margin-top:16px;
    }
`
export default TextCheckList