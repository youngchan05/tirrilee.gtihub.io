import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IconMvp, IconPreminum, IconProduct } from '../../../common/svg'
import TextTag from '../atoms/TextTag'

function PlanItem({currentActive}) {
    const items = [
        {
            icon:<IconMvp/>,
            title:'MVP 플랜',
            desc:` 빠른 시장검증이 필요하다면?
            검증하고자 하는 핵심 기능만 담아 개발하는 과정`,
            tag:['IT컨설팅','기획 Basic','디자인 Basic','개발 Basic']
        },
        {
            icon:<IconProduct/>,
            title:'Product 플랜',
            desc:`서비스의 최소 개발은?
            핵심기능 + 필수기능을 담아 개발하는 과정`,
            tag:['IT컨설팅','기획 Pro','디자인 Basic','개발 Pro']
        },
        {
            icon:<IconPreminum/>,
            title:'Premium 플랜',
            desc:`고도화된 개발이 필요하다면?
            서비스에 필요한 모든 기능을 담아 개발하는 과정`,
            tag:['IT컨설팅','기획 Pro','디자인 Pro','개발 Premium']
        }
    ]
  return (
    <Wrapper>
        {
            items.map( (i, idx) => {
                const { icon, title, desc, tag} = i;
                return (
                    <Link to={''} key={idx} className={idx === currentActive ? 'active planBox' :'planBox'}>
                        <i className='icon'>{icon}</i>
                        <strong>{title}</strong>
                        <p>{desc}</p>
                        <ul className='tagList'>
                            {
                                tag.map((j, index)=> <li key={index}><TextTag text={j}/></li>)
                            }
                        </ul>
                    </Link>
                )
            })
        }
    </Wrapper>  
  )
}

const Wrapper = styled.div`
    display:flex;
    .planBox {
        display:flex;
        flex: 1;
        flex-direction: column;
        padding: 28px;
        border-radius: 8px;
        border: solid 1px #e4e6ea;
        background-color: #fff;
        i {
            margin-bottom:20px;
        }
        strong {
            margin-bottom:8px;
            font-size: 24px;
            font-weight: bold;
            line-height: 1.7;
            color: #000;
        }
        p {
            margin-bottom:20px;
            font-size: 16px;
            line-height: 1.7;
            color: #000;
        }
        .tagList {
            display:flex;
            li {
                + li {
                    margin-left: 6px;
                }
            }

        }
        + .planBox {
            margin-left:20px;
        }
        &:hover {
            border: solid 1px var(--primary-p-500);
            transition: esce-in .2s;
        }
    }
`

export default PlanItem