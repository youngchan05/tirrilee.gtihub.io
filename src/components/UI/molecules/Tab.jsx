import React from 'react'
import styled from 'styled-components'

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

`
export default Tab