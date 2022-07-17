import React from 'react'
import styled, { css } from 'styled-components'
import ContentBox from '../../components/UI/molecules/ContentBox';
import SectionText from '../../components/UI/molecules/SectionText'
import useClick from '../../Hooks/useCurrentTab'

function About() {
    const {currentTab , onClickCurrent} = useClick(0);
    const tabList = ['Fit','Durable','Comfortable','Efficient'];
    const valueText = [
        {
            title:'세상의 필요를 충족시켜주는 서비스',
            desc:`단순 아이디어를 구체화시키는것을 넘어서
            현재의 자원과 시장성을 고려하여 최선의 솔루션을 제시합니다.`
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
            <img src="./images/img_aboutBanner.png" alt=""  className='isPc'/>
            <img src="./images/img_aboutBannerT.png" alt="" className='isTablet'/>
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
                <strong>{valueText[currentTab].title}</strong>
                <p>{valueText[currentTab].desc}</p>
            </div>
        </OurValue>
        <ExperiencesBox>
            <img src="./images/img_Experiences.png" alt="" />
            <SectionText>
                <p className='sub'>Why Tirrilee</p>
                <strong className='title'>Various Experiences</strong>
            </SectionText>
            <p>
                2018년 창립 이후, 다양한 프로젝트를 수행하면서 수 많은 서비스들의 성공과 실패를 함께 경험했습니다.<br/>
                이 과정에서 단순 ‘개발업무’ 만을 수행하는 것으로는 성공하는 서비스를 만들기 어렵다는 것을 직접 시장에서 배웠습니다.
            </p>
            <p>
                초기 사업 단계부터 IT 컨설팅, 기획, 디자인 그리고 개발 이후 유지보수단계까지 전 과정을 함께 진행합니다.<br/>
                고객의 상황에 맞추어 최적의 개발 솔루션 및 방향성을 제시합니다.
            </p>
        </ExperiencesBox>
        <Partners>
            <SectionText>
                <ContentBox>
                    <p className='sub'>Why Tirrilee</p>
                    <strong className='title'>Partners</strong>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </ContentBox>
            </SectionText>
        </Partners> 
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
    ${({theme}) => {
        const { mobile,tablet} = theme;
        return css`
            @media screen and ${tablet} {
                .sectionTitle {
                    .title {
                        margin-bottom:32px;   
                    }
                }
            }
        `
    }}
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
    ${({theme}) => {
        const { mobile,tablet} = theme;
        return css`
            @media screen and ${tablet} {
                padding:120px 0 124px 0;
            }
        `
    }}
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
            border-radius: 100%;
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
    .tabCont {
        margin-top:80px;
        text-align: center;
        strong{
            font-size: 32px;
            font-weight: bold;
            line-height: 1.5;
            text-align: center;
            color: var(--primary-primary);
        }
        p{
            margin-top:36px;
            font-size: 20px;
            line-height: 1.7;
            letter-spacing: normal;
            text-align: center;
            color: var(--gray-scale-gray-9);
            white-space: pre-line;
        }
    }
    ${({theme}) => {
        const { mobile,tablet} = theme;
        return css`
            @media screen and ${tablet} {
                padding:100px 30px;
                .tabBox {
                    .tab {
                        padding-top: 21.4%;
                        font-size: 20px;
                        border-radius: 100%;
                        + .tab {
                            margin-left:16px;
                        }
                    }
                }
                .tabCont {
                    margin-top:48px;
                    strong{
                        font-size: 28px;
                        line-height: 42px;
                    }
                    p{
                        margin-top:20px;
                        font-size: 18px;
                        line-height: 30px;
                    }
                }
            }
        `
    }}
`
const ExperiencesBox = styled.div`
    text-align:center;
    padding:120px 0;
    background-color: var(--gray-scale-gray-1);
    img {
        width:258px;
        margin-bottom:28px;
    }
    p {
        font-size: 20px;
        line-height: 1.7;
        color: var(--gray-scale-gray-9);
        + p {
            position:relative;
            margin-top:28px;
            padding-top:28px;
            &::after {
                display:block;
                position:absolute;
                left:50%;
                top:0;
                width:40px;
                height:1px;
                transform:translateX(-50%);
                background-color: var(--gray-scale-gray-9);
                content:"";
            }
        }
    }
    ${({theme}) => {
        const { mobile,tablet} = theme;
        return css`
            @media screen and ${tablet} {
                padding:80px 30px;
                img {
                    width:178px;
                    margin-bottom:40px;
                }
            }
        `
    }}
`

const Partners = styled.div`
    padding:160px 0;
    ul {
        display:flex;
        flex-wrap:wrap;
        margin:-20px 0 0 -20px;
        li {
            margin:20px 0 0 20px;
            width:calc(25% - 20px);
            height:80px;
            background-color: var(--gray-scale-gray-2);
        }
    }
    ${({theme}) => {
        const { mobile,tablet} = theme;
        return css`
            @media screen and ${tablet} {
                padding:100px 0;
                ul {
                    margin:-16px 0 0 -16px;
                    li {
                        margin:16px 0 0 16px;
                        width:calc(25% - 16px);
                        height:52px;
                    }
                }
            }
        `
    }}
`
export default About