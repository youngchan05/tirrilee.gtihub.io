import React from 'react'
import styled from 'styled-components'
import useClick from '../../../Hooks/useCurrentTab';
import { Link} from 'react-router-dom'
import { employmentsData } from '../../../pages/Team/data';
import Button from '../atoms/Button';
import SubTit from '../atoms/SubTit';
import ContentBox from '../molecules/ContentBox'
import Tab from '../molecules/Tab';

function Employment() {
    const {currentTab , onClickCurrent} = useClick(0);
    const tabList = ['Front-end','Back-end','UX/UI','Marketing','ETC'];
  return (
    <Wrapper>
        <ContentBox>
            <SubTit text={'채용 공고'}/>
            <Tab
                list={tabList}
                onClick={onClickCurrent}
                currentTab={currentTab}
            />
            <div className="tabCont">
                <strong>{employmentsData[currentTab].title}</strong>
                <div className="textBox">
                    {
                        employmentsData[currentTab].disabled ?
                        <>
                            <dl>
                                <dt>현재는 채용중이 아니에요!</dt>
                                <dd>현재 채용중인 공고가 없어요.</dd>
                            </dl>
                            <Link to="/">
                                <Button disabled>지원하기</Button>
                            </Link>
                        </>
                        
                        :
                        <>
                            {employmentsData[currentTab].text}
                            <Link to="/">
                                <Button>지원하기</Button>
                            </Link>
                        </>
                    }
                </div>
            </div>
        </ContentBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    padding:80px 0 120px 0;
    background-color: var(--gray-scale-gray-1);
    .tabs {
        margin:20px 0 32px 0;
        justify-content: flex-start;
    }
    .tabCont {
        display:flex;
        button {
            margin-top:60px;
        }
        strong {
            flex:0 0 372px;
            margin-right:20px;
            font-size: 48px;
            font-weight: 800;
            line-height: 1.5;
            color: var(--gray-scale-black);
        }
        dl{
            dt{
                margin-bottom:8px;
                font-size: 24px;
                font-weight: bold;
                line-height: 1.7;
                color: var(--gray-scale-black);
            }
            dd{
                p{
                    font-size: 16px;
                    line-height: 1.7;
                    color: var(--gray-scale-gray-9);
                }
                + dt {
                    margin-top:32px;
                }
            }
        }
    }
`
export default Employment