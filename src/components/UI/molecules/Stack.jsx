import React from 'react'
import styled from 'styled-components'

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
        li {
            display: flex;
            align-items: center;
            width: 25%;
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
            + li {
                margin-left:20px;
            }
        }
    }
`
export default Stack