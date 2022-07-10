import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
function Gnb() {
    const locatoin  = useLocation()
    const menu = ['About','Service','Team','Work','Contact','Feed']
    
  return (
    <Wrapper className='gnb'>
        {
            menu.map( (i, idx) => <li className={locatoin.pathname.search(i.toLowerCase()) > 0 ? 'active' : ''} key={idx}><Link to={`/${i.toLowerCase()}`}>{i}</Link></li>)
        }
    </Wrapper>
  )
}

const Wrapper =  styled.ul`
    display:flex;
    li {
        padding:20px 0;
        border-bottom:2px solid transparent;
        a {
            display:inline-block;
            font-size:14px;
            line-height:24px;
            color: var(--gray-scale-gray-8);
            transition: all ease-in .2s;
        }
        + li {
            margin-left:60px;
        }
        &.active {
            border-color: var(--primary-primary);
        }
        &:hover, &.active {
            a {
                color: var(--primary-primary);
            }
        }
    }
`
export default Gnb