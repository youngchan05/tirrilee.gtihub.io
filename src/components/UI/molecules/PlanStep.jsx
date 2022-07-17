import React from 'react'
import styled, { css } from 'styled-components'
import {  IconServieTab01, IconServieTab02, IconServieTab03, IconServieTab04 } from '../../../common/svg'
import TextTag from '../atoms/TextTag'

function PlanStep({items}) {
    console.log(items ,'items')
    const plans = [
        {
            sub:'Consulting',
            title:'IT 컨설팅',
            icon:<IconServieTab01/>,
            color:'#ffcd4d',
        },
        {
            sub:'Planning',
            title:'서비스 기획',
            icon:<IconServieTab02/>,
            color:'#00e6ca',
        },
        {
            sub:'Design',
            title:'UX/UI 디자인',
            icon:<IconServieTab03/>,
            color:'#ff5f5f',
        },
        {
            sub:'Development',
            title:'프로젝트 개발',
            icon:<IconServieTab04/>,
            color:'#3fc5ff',
        },
    ]
  return (
    <Wrapper>
        {
            plans.map((i, idx) => {
                const { sub, title, icon, color} = i;
                console.log(items[sub.toLowerCase()].tag)
                return <Item colors={color} className='step'>
                    <p>{`step ${idx + 1}`}</p>
                    <i>{icon}</i>
                    <span>{sub}</span>
                    <strong>{title}</strong>
                    <TextTag text={items[sub.toLowerCase()].tag}/>
                </Item>
            })
        }
    </Wrapper>
  )
}


const Wrapper = styled.div`
    display:flex;
    ${({theme}) => {
        const { mobile,tablet} = theme;
        return css`
            @media screen and ${tablet} {
                overflow: auto;
            }
        `
    }}
`
const Item = styled.div`
    flex:1;
    display:flex;
    flex-direction: column;
    padding-bottom:16px;
    align-items: center;
    border-radius: 20px;
    box-shadow: 0 10px 30px 0 rgba(127, 130, 140, 0.12);
    background-color: #fff;
    overflow:hidden;
    p {
        width:100%;
        padding:6px 0;
        font-size: 16px;
        line-height: 1.7;
        text-align: center;
        color: #fff;
        background-color:${props => props.colors ? props.colors : '#fff' };
        border-radius: 20px 20px 0 0;
    }
    span {
        margin-bottom:4px;
        font-size: 16px;
        line-height: 1.7;
        text-align: center;
        color: #5a5e6a;
    }
    strong {
        margin-bottom:4px;
        font-size: 24px;
        font-weight: bold;
        line-height: 1.7;
        color: ${props => props.colors ? props.colors : '#fff' };
    }
    i {
        display: inline-block;
        margin:16px 0;
        width:80px;
        height:80px;
        svg {
            width:100%;
            height:100%;
        }
    }
    + .step {
        margin-left:20px;
    }
    ${({theme}) => {
        const { mobile,tablet} = theme;
        return css`
            @media screen and ${tablet} {
                flex: 0 0 274px;
            }
        `
    }}
`
export default PlanStep