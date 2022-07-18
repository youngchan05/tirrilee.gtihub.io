import React from 'react'
import styled, { css } from 'styled-components'

function Tab({list, onClick, currentTab}) {
  return (
    <Wrapper>
        <Tabs className='tabs'>
            {
                list.map((i, idx) => <button key={idx} onClick={()=>onClick(idx)} className={idx === currentTab ? 'active' :''} type="button">{i}</button>)
            }
        </Tabs>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    overflow:auto;
`
const Tabs = styled.div`
    display:flex;
    justify-content: center;
    width:100%;
    margin-bottom:48px;
    button {
        padding:12px 20px;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: normal;
        text-align: center;
        color: var(--gray-scale-gray-9);
        border-radius: 8px;
        &.active {
            background-color: var(--primary-p-100);
            color: var(--primary-primary);
        }
        + button {
            margin-left:20px;
        }
    }
    ${({theme}) => {
        const { mobile,tablet} = theme;
        return css`
            @media screen and ${tablet} {
                margin-bottom:32px;
                button {
                    + button {
                        margin-left:16px;
                    }
                }
            }
            @media screen and ${mobile} {
                justify-content: flex-start;
                .hideMo {
                    display:none;
                }
                button {
                    width:auto;
                    flex:0 0 auto;
                }
            }
        `
    }}

`
export default Tab