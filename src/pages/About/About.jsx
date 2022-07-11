import React from 'react'
import styled from 'styled-components'
import SectionText from '../../components/UI/molecules/SectionText'
import useClick from '../../Hooks/useCurrentTab'

function About() {
    const {currentTab , onClickCurrent} = useClick(0);
    const tabList = ['Fit','Durable','Comfortable','Efficient'];
    const valueText = [
        {
            title:'효율적인 개발 기술을 통해 서비스 구현',
            desc:`같은 기능, 유사한 페이지들을 구조화하여 효율적으로 작업합니다.
            서비스의 규모를 고려한 데이터베이스 및 서버 구축을 진행합니다.`
        },
        {
            title:'일관된 로직을 통해 구조화된 서비스',
            desc:`간결함을 추구하며 복잡한 설계를 지양합니다.
            단순하고 심플한 로직을 만들고 연결하여 구조화가 쉽게 될 수 있도록 기획합니다.`
        },
        {
            title:'유저의 편의를 최우선으로 고려한 서비스',
            desc:`유저가 쉬운 사용성을 느낄 수 있도록 편안함을 추구합니다.
            서비스의 목적을 고려하여 유저친화적으로 UX/UI 디자인을 진행합니다.`
        },
        {
            title:'효율적인 개발 기술을 통해 서비스 구현',
            desc:`같은 기능, 유사한 페이지들을 구조화하여 효율적으로 작업합니다.
            서비스의 규모를 고려한 데이터베이스 및 서버 구축을 진행합니다.`
        },
    ]
    
  return (
    <Wrapper>
        <AboutTitle>
            <strong>About<span>Tirrilee</span></strong>
            <p>티릴리와 함께 아이디어를 서비스로 만들어보세요.<br/>
            IT 컨설팅부터 시작하여 개발 단계까지 통합 개발 에이전시 그룹입니다.</p>
        </AboutTitle>
        <div className="bnnaerImg">
            <img src="./images/img_aboutBanner.png" alt="" />
        </div>
        <OurValue>
            <SectionText>
                <p className='sub'>What we seek</p>
                <strong className='title'>Our Value</strong>
            </SectionText>
            <div className="tabBox">
                {
                    tabList.map( (i, idx) => <button onClick={() => onClickCurrent(idx)} className={currentTab === idx ? 'tab active' :'tab'} key={idx} type="button"><span>{i}</span></button>)
                }
            </div>
            <div className="tabCont">
                {/* {
                    valueText.filter((i, idx) => idx === currentTab )
                } */}
            </div>
        </OurValue>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    .bnnaerImg {
        img {
            width:100%;
        }
    }
    .sectionTitle {
        .title {
            margin-bottom:60px;   
        }
    }
`

const AboutTitle = styled.div`
    padding:140px 0 160px;
    font-size: 48px;
    font-weight: 800;
    line-height: 1.5;
    text-align: center;
    color: var(--gray-scale-black);
    strong {
        font-weight: inherit;
    }
    span {
        font-weight: inherit;
        color: var(--primary-primary);
    }
    p {
        margin-top:20px;
        font-size: 20px;
        line-height: 1.7;
        text-align: center;
        color: var(--gray-scale-gray-9);
    }
`
const OurValue = styled.div`
    padding:160px 0;
    .tabBox {
        display:flex;
        width:100%;
        max-width:1122px;
        margin:0 auto;
        .tab {
            display:flex;
            position:relative;
            width:25%;
            padding-top: 21.4%;
            font-size: 24px;
            font-weight: bold;
            color: var(--primary-primary);
            border-radius: 137px;
            background-color: var(--primary-p-100);
            span {
                position:absolute;
                left:50%;
                top:50%;
                transform: translate(-50% ,-50%);
                font-size: inherit;
                font-weight: inherit;
            }
            + .tab {
                margin-left:54px;
            }
            &.active {
                background-color: var(--primary-primary);
                color:#fff;
            }
        }
    }
`

export default About