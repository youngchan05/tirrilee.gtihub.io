import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
function Gnb({isActive, onToggleActive}) {
    const locatoin  = useLocation()
    const menu = ['About','Service','Team','Work','Contact','Feed']
    
    useEffect ( () => {
        console.log(222)
        return ( () => {
            console.log(111)
        })
    },[])
  return (
    <Wrapper isActive={isActive} className='gnb'>
        {
            menu.map( (i, idx) => <li onClick={()=>onToggleActive()} className={locatoin.pathname.search(i.toLowerCase()) > 0 ? 'active' : ''} key={idx}><Link to={`/${i.toLowerCase()}`}>{i}</Link></li>)
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
    ${({theme, isActive}) => {
        const { mobile,tablet} = theme;
        return css`
            @media screen and ${tablet} {
                display:${isActive ? 'block':'none'};
                position:fixed;
                left:0;
                top:54px;
                background: #fff;
                width:100%;
                height:100vh;
                padding:80px 30px;
                li  {
                    padding:0;
                    a {
                        font-size:24px;
                        line-height:40px;
                    }
                    + li {
                        margin-left:0;
                        margin-top:40px;
                    }
                    &.active {
                        border-color:transparent;
                    }
                }
            }
            @media screen and ${mobile} {
                padding:60px 30px;
            }
        `
    }}
`
export default Gnb