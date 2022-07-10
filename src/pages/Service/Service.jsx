import React from 'react'
import styled from 'styled-components'
import { useNavigate} from 'react-router-dom'
import { IconServieTab01,IconServieTab02,IconServieTab03,IconServieTab04 } from '../../common/svg'
import Title from '../../components/UI/atoms/Title'
import ContentBox from '../../components/UI/molecules/ContentBox'
import PlanItem from '../../components/UI/molecules/PlanItem'

function Service() {
    const navigate = useNavigate();
    const tabItems = [
        {
            title:'IT 컨설팅',
            desc:`막막한 기획서 작성 ! 아이디어만 있어도 괜찮아요.
            전문가와 함께 준비중인 서비스 IT 컨설팅을 받아보세요!`,
            link:'consulting',
            icon:<IconServieTab01/>,
        },
        {
            title:'서비스 기획',
            desc:`프로젝트 규모 산정이 완료되었다면?
            메뉴구조도를 바탕으로 상세기획 및 와이어프레임을 작업합니다.`,
            link:'servicePlanning',
            icon:<IconServieTab02/>
        },
        {
            title:'UX/UI  디자인',
            desc:`서비스 기획 과정이 끝났다면?
            와이어프레임에 UX를 고려하여 GUI를 진행하고 Sytle Guide를 제작합니다.`,
            link:'design',
            icon:<IconServieTab03/>
        },
        {
            title:'프로젝트 개발',
            desc:`완료된 기획서 및 디자인을 바탕으로 프로젝트를 개발합니다.
            퍼블리싱,  DB설계, 서버세팅, API개발 및 연동, 배포 모든 개발과정을 포함합니다.`,
            link:'development',
            icon:<IconServieTab04/>
        }
        ]
  return (
    <Wrapper>
      <ContentBox>
        <Title text={'서비스 소개'}/>
        <p className='serviceSubTit'>티릴리는 고객의 상황에 맞는 맞춤형 서비스를 제공합니다.</p>
        <ServiceItem>
            {
                tabItems.map((i ,index) => {
                    const { title, desc, link, icon} = i;
                    return (
                    <Item key={index} onClick={ ()=> navigate(`/service/${link}`)}>
                        <i>{icon}</i>
                        <strong className='tabTit'>{title}</strong>
                        <p className='tabDesc'>{desc}</p>
                    </Item>
                    )
                })
                }
        </ServiceItem>
        <Title text={'추천 플랜'}/>
        <p className='serviceSubTit'>티릴리에서 사업 단계에 따라서 개발과정을 추천드려요. 내게 맞는 개발 플랜을 만나보세요.</p>
        <PlanItem/>
      </ContentBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    padding:120px 0;
    margi-bottom:16px;
    .serviceSubTit {
        margin-bottom:32px;
        font-size: 20px;
        line-height: 1.7;
        color: var(--gray-scale-black);
    }
`

const ServiceItem = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin:-20px 0 160px -20px;
`
const Item = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(50% - 20px);
    padding: 28px;
    margin:20px 0 0 20px;
    border-radius: 8px;
    border: solid 1px var(--gray-scale-gray-3);
    background-color: var(--gray-scale-white);
    transition: esce-in .2s;
    i {
        display: flex;
        margin-bottom:20px;
        svg {
            width:80px;
            height:80px;
        }
    }
    strong {
        margin-bottom:8px;
        font-size: 24px;
        font-weight: bold;
        line-height: 1.7;
        color: var(--gray-scale-black);
    }
    p {
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.7;
        letter-spacing: normal;
        text-align: left;
        color: var(--gray-scale-black);
        white-space: pre-line;
    }
    &:hover {
        border: solid 1px var(--primary-p-500);
    }
`
export default Service