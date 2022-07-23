import React from 'react'
import { useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Button from '../../components/UI/atoms/Button';
import ContentBox from '../../components/UI/molecules/ContentBox';
import Faq from '../../components/UI/molecules/Faq';
import PlanItem from '../../components/UI/molecules/PlanItem';
import PlanStep from '../../components/UI/molecules/PlanStep';
import Price from '../../components/UI/molecules/Price';
import ServiceTop from '../../components/UI/molecules/ServiceTop'
import Stack from '../../components/UI/molecules/Stack';
import ServiceSection from '../../components/UI/organisms/ServiceSection';
import { plandata } from './data';

function PlanDetail() {
  const params = useParams();
  const selectedItem = plandata[params.type];
  
  const { 
    explanation, 
    introduction,
    price,
    items,
    stack,
    faq,
  }  = selectedItem ;

  console.log(items ,'items')
  return (
    <Wrapper>
      <ServiceTop data={selectedItem}/>
      <ContentBox>
          <ServiceSection>
            <strong className='tit'>서비스 설명</strong>
            <p className='subTit'>{explanation}</p>
          </ServiceSection>
          <ServiceSection>
            <strong className='tit'>플랜 과정</strong>
            <p className='subTit'>{introduction}</p>
            <PlanStep items={items}/>
          </ServiceSection>
          <ServiceSection>
            <strong className='tit'>평균 비용 안내</strong>
            <p className='subTit'>{price}</p>
            <div className="priceWrapper">
              <Price item={items.consulting}/>
              <Price item={items.planning}/>
              <Price item={items.design}/>
              <Price item={items.development}/>
            </div>
          </ServiceSection>
          <ServiceSection>
            <strong className='tit'>개발 스택</strong>
            <Stack stacks={stack}/>
          </ServiceSection>
          <ServiceSection>
            <strong className='tit'>FAQ</strong>
            <Faq list={faq}/>
          </ServiceSection>
          <Button className={'btnAsk'}>프로젝트 문의하기</Button>
          <ServiceSection>
            <strong className='tit plan'>다른 플랜</strong>
            <PlanItem currentActive={params.type}/>
          </ServiceSection>
        </ContentBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .tit {
    &.plan + div{
      margin-top:12px;
    }
  }
  padding-bottom:120px;
  .btnAsk {
    display:block;
    margin:0 auto 120px auto;
  }
  ${({theme}) => {
    const { mobile,tablet} = theme;
    return css`
        @media screen and ${mobile} {
          padding-bottom:80px;
          .btnAsk {
            margin-bottom:80px;
          }
        }
    `
  }}
`

export default PlanDetail