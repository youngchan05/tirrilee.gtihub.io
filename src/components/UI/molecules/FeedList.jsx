import React from 'react'
import styled, { css } from 'styled-components'
import { IconArrowRightSm, Logo } from '../../../common/svg'
import { Link } from 'react-router-dom'
import useClick from '../../../Hooks/useCurrentTab'
import ContentBox from './ContentBox';
import Buttons from '../atoms/Button'
import Button from '../atoms/Button'
import Tab from './Tab'

function FeedList() {
    const {currentTab , onClickCurrent} = useClick(0)
    const feedTabs = ['전체보기','티릴리 소식','인사이트','채용정보','공지사항']
    const feedItmes = [
        {
            tag:'채용정보',
            title:'2021 Seoul Design Festival 참여',
            desc:'티릴리는 2021 서울 디자인 페스티벌에 참여했습니다. 티릴리 MBTI 테스트를 진행해서 사람들이 많이 모였어요. 코로나인데도 불구하고 많은 인원이 부스에 방문해주셨습니다. 티릴리는 2021 서울 디자인 페스티벌에 참여했습니다. 티',
            link:'1',
            url:'',
        },
        {
            tag:'공지사항',
            title:'2021 Seoul Design Festival 참여',
            desc:'티릴리는 2021 서울 디자인 페스티벌에 참여했습니다. 티릴리 MBTI 테스트를 진행해서 사람들이 많이 모였어요. 코로나인데도 불구하고 많은 인원이 부스에 방문해주셨습니다. 티릴리는 2021 서울 디자인 페스티벌에 참여했습니다. 티',
            link:'1',
            url:'',
        },
        {
            tag:'티릴리 소식',
            title:'2021 Seoul Design Festival 참여',
            desc:'티릴리는 2021 서울 디자인 페스티벌에 참여했습니다. 티릴리 MBTI 테스트를 진행해서 사람들이 많이 모였어요. 코로나인데도 불구하고 많은 인원이 부스에 방문해주셨습니다. 티릴리는 2021 서울 디자인 페스티벌에 참여했습니다. 티',
            link:'1',
            url:'',
        },
        {
            tag:'인사이트',
            title:'2021 Seoul Design Festival 참여',
            desc:'티릴리는 2021 서울 디자인 페스티벌에 참여했습니다. 티릴리 MBTI 테스트를 진행해서 사람들이 많이 모였어요. 코로나인데도 불구하고 많은 인원이 부스에 방문해주셨습니다. 티릴리는 2021 서울 디자인 페스티벌에 참여했습니다. 티',
            link:'1',
            url:'',
        }
    ]
  return (
    <Wrapper className='feedWrapper'>
        <Tab
            list={feedTabs}
            onClick={onClickCurrent}
            currentTab={currentTab}
        />
        <List className='feedList'>
            {
                feedItmes.filter((i) => {
                    return feedTabs[currentTab] === '전체보기' ? 
                    i :
                    feedTabs[currentTab] === i.tag
                }).map((j, idx) => {
                    const { tag, title, desc,link,url} = j;
                    return (
                        <Link className='linkBox' to={`/feed/${link}`}>
                            <div key={idx} className="listItem">
                                <span className='imgBox'>
                                    {
                                        url ? <img src={url} alt="" /> : <Logo/>
                                    }
                                </span>
                                <div className="textBox">
                                    <span>{tag}</span>
                                    <strong>{title}</strong>
                                    <p>{desc}</p>
                                    <Link to={`/feed/${link}`}>More <IconArrowRightSm/> </Link>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </List>
    </Wrapper>

  )
}

const Wrapper = styled.div`
    padding-top:48px;
    ${({theme}) => {
        const { mobile,tablet} = theme;
        return css`
            @media screen and ${tablet} {
                padding-top:12px;
            }
            @media screen and ${mobile} {
            }
        `
    }}

`
const List = styled.div`
    .linkBox {
        display:block;
        + .linkBox {
            margin-top:24px;
        }
    }
    .listItem {
        display:flex;
        padding: 20px;
        border-radius: 8px;
        border: solid 1px var(--gray-scale-gray-3);
        background-color: var(--gray-scale-white);
        transition: esce-in .2s;
        + .listItem {
            margin-top:24px;
            }
            &:hover {
                border: solid 1px var(--primary-p-500);
            }
        }
    .imgBox {
        position:relative;
        display:block;
        width: 260px;
        height: 195px;
        border-radius: 8px;
        flex: 0 0 auto;
        background-color: var(--primary-p-100);
        svg {
            position:absolute;
            left:50%;
            top:50%;
            width:80px;
            transform: translate(-50% ,-50%);
            path {
                fill: var(--primary-p-200);
            }
        }
    }
    .textBox {
        display: flex;
        flex-direction: column;
        padding-top:6px;
        margin-left:32px;
        span{
            display:inline-block;
            margin-bottom:4px;
            font-size: 16px;
            line-height: 27px;
            color: var(--primary-primary);
        }
        strong{
            margin-bottom:12px;
            font-size: 24px;
            font-weight: bold;
            line-height: 40px;
            color: var(--gray-scale-black);
        }
        p{
            margin-bottom:12px;
            font-size: 18px;
            line-height: 30px;
            color: var(--gray-scale-gray-8);
        }
        a {
            display:flex;
            font-size: 14px;
            line-height: 24px;
            text-align: left;
            color: var(--gray-scale-gray-6);
            svg {
                margin-left:4px;
            }
        }
    }
    
    ${({theme}) => {
        const { mobile,tablet} = theme;
        return css`
            @media screen and ${tablet} {
                .linkBox {
                    + .linkBox {
                        margin-top:20px;
                    }
                }
                .textBox {
                    display: flex;
                    flex-direction: column;
                    padding-top:6px;
                    margin-left:32px;
                    strong{
                        display: -webkit-box;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                        overflow: hidden;  
                    }
                    p{
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;  
                    }
                    a {
                        
                    svg {
                        margin-left:4px;
                    }
                }
            }
            @media screen and ${mobile} {
                .listItem {
                    border:none;
                    padding:0;
                }
                .linkBox {
                    .imgBox {
                        width:96px;
                        height:72px;
                    }
                    + .linkBox {
                        margin-top:24px;
                    }
                }
                .textBox {
                    padding-top:3px;
                    margin-left:16px;
                    strong{
                        font-size:18px; 
                        line-height:27px;
                        margin-bottom:0;
                        }
                    p{
                        display:none;
                    }
                    a {
                        display:none;
                }
            }
        `
    }}
}
`

export default FeedList