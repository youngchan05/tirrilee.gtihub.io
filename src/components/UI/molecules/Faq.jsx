import React from 'react'
import { useState } from 'react';
import styled, { css } from 'styled-components'
import { IconArrow } from '../../../common/svg';

function Faq({list}) {
    const [ data, setData] = useState(list)

    const onClick = (current) => {
        setData(
            data.map( (i,idx) => idx === current ? {...i,isActive:!i.isActive} : i)
        )
    }
  return (
    <Wrapper>
        <ul>
            {
                data.map((i, idx) => {
                    const {ask, answer,isActive} = i;
                    return (
                        <li key={idx}>
                            <button onClick={()=>onClick(idx)} type="button" className='aksTit'>
                                {ask}
                                <i  className={isActive ? 'arrow active' :'arrow'}>
                                    <IconArrow />
                                </i>
                            </button>
                            <div className={isActive ? 'active answerBox' :'answerBox'} >
                                {answer}
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    li {
        padding-bottom:20px;
        border-bottom: solid 1px #e4e6ea;
        + li {
            padding-top:20px;
        }
    }
    .aksTit {
        display:flex;
        align-items: center;
        width:100%;
        font-size: 20px;
        line-height: 1.7;
        text-align: left;
        color: #000;
        .arrow {
            display: flex;
            align-items: center;
            margin-left:auto;
            &.active {
                transform: rotate(180deg);
                transition:.2s ease-in;
            }
        }
    }
    .answerBox {
        max-height:0;
        padding:0;
        overflow:hidden;
        font-size: 16px;
        line-height: 1.7;
        text-align: left;
        color: #3b3f4a;
        transition:.2s ease-in;
        &.active {
            padding-top:20px;
            max-height:100vh;
        }
    }
    ${({theme}) => {
        const { mobile,tablet} = theme;
        return css`
            @media screen and ${mobile} {
                .aksTit {
                    font-size: 18px;
                    line-height:30px;
                }
            }
        `
    }}
`
export default Faq