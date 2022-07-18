import React from 'react'
import styled, { css } from 'styled-components'

function MemberBox({member}) {
    const { position, name, eng, mbti, profile} = member;
  return (
    <Wrapper>
        <div className="textBox">
            <span className='pos'>{position}</span>
            <p className='nameBox'>
                <strong>{name}</strong>
                <span>{eng}</span>
            </p>
            <span className='mbti'>{mbti}</span>
        </div>
        <div className="profile">
            <img src="" alt="" />
        </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
    display:flex;
    align-items: center;
    width:calc(33.33% - 20px);
    margin:20px 0 0 20px;
    padding:24px;
    border-radius: 8px;
    border: solid 1px var(--gray-scale-gray-3);
    &:hover {
        border: solid 1px var(--primary-p-500);
        transition: esce-in .2s;
    }
    .textBox {
        .pos {
            margin-bottom:2px;
            display:inline-block;
            font-size: 14px;
            line-height: 1.7;
            color: var(--primary-primary);
        }
        .nameBox {
            display:flex;
            align-items:center;
            strong{
                font-size: 24px;
                font-weight: bold;
                line-height: 1.7;
                text-align: left;
                color: var(--gray-scale-black);
            }
            span{
                margin-left:12px;
                font-size: 16px;
                line-height: 1.7;
                text-align: left;
                color: var(--gray-scale-black);
            }
        }
        .mbti {
            display: inline-block;
            margin-top:2px;
            font-size: 12px;
            line-height: 1.7;
            color: var(--gray-scale-gray-8);
        }
    }
    .profile {
        width:60px;
        height:60px;
        margin-left: auto;
        border-radius:100px;
        background: #eee;
    }
    ${({theme}) => {
        const { mobile,tablet} = theme;
        return css`
            @media screen and ${tablet} {
                align-items: center;
                width:calc(50% - 16px);
                margin:16px 0 0 16px;
            }
            @media screen and ${mobile} {
                position: relative;
                padding:92px 20px 20px 20px;
                .profile {
                    position:absolute;
                    left:50%;
                    top:20px;
                    transform: translateX(-50%);
                }
                .textBox {
                    width: 100%;
                    text-align:center;
                    .nameBox {
                        flex-direction: column;
                        strong{
                            font-size: 20px;
                            line-height: 30px;
                        }
                        span{
                            margin:4px 0 0 0;
                        }
                    }
                    .mbti {
                        display:none;
                    }
                }
            }
        `
    }}
`
export default MemberBox