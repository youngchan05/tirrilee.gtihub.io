import React from 'react'
import styled, { css } from 'styled-components'

function Stack({stacks}) {
  return (
    <Wrapper>
        <ul>
            {
                stacks.map((i, idx) => {
                    const { name, language, icon } = i;
                    return <li key={idx}>
                        <i>{icon}</i>
                        <div className="textBox">
                            <strong>{name}</strong>
                            <p>{language}</p>
                        </div>
                    </li>
                })
            }
        </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    ul {
        display:flex;
        flex-wrap: wrap;
        margin:-20px 0 0 -20px;
        li {
            display: flex;
            align-items: center;
            width: calc(25% - 20px);
            margin:20px 0 0 20px;
            i {
                margin-right:20px;
            }
            .textBox {
                strong{
                    font-size: 18px;
                    font-weight: 500;
                    line-height: 1.5;
                    text-align: left;
                    color: #000;
                }
                p {
                    margin-top:4px;
                    font-size: 14px;
                    line-height: 1.7;
                    text-align: left;
                    color: #5a5e6a;
                }
            }
        }
    }
    ${({theme}) => {
        const { mobile,tablet} = theme;
        return css`
            @media screen and ${tablet} {
                ul {
                    li {
                        width: calc(33.33% - 16px);
                        margin:16px 0 0 16px;
                        i {
                            margin-right:16px;
                        }
                        .textBox {
                            strong{
                                font-size: 18px;
                                font-weight: 500;
                                line-height: 1.5;
                                text-align: left;
                                color: #000;
                            }
                            p {
                                margin-top:4px;
                                font-size: 14px;
                                line-height: 1.7;
                                text-align: left;
                                color: #5a5e6a;
                            }
                        }
                    }
                }
            }
        `
    }}
`
export default Stack