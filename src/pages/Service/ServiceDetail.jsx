import React from 'react'
import styled from 'styled-components'
import { useLocation, useParams} from 'react-router-dom'
import ServiceTop from '../../components/UI/molecules/ServiceTop';
import { serviceData } from './data';
import Button from '../../components/UI/atoms/Button';
import ServiceSection from '../../components/UI/organisms/ServiceSection';
import ContentBox from '../../components/UI/molecules/ContentBox';
import CheckList from '../../components/UI/molecules/CheckList';
import ProcessStep from '../../components/UI/molecules/ProcessStep';
import Faq from '../../components/UI/molecules/Faq';

function ServiceDetail() {
    const params = useParams();
    const selectedItem = serviceData[params.type];
    const { 
      explanation, 
      introduction, 
      process,
      basic,
      pro,
      premium,
      master,
      processItem,
      faq,
    }  = selectedItem ;
  return (
    <Wrapper>
        <ServiceTop data={selectedItem}/>
        <ContentBox>
          <ServiceSection>
            <strong className='tit'>서비스 설명</strong>
            <p className='subTit'>{explanation}</p>
          </ServiceSection>
          <ServiceSection>
            <strong className='tit'>서비스 소개</strong>
            <p className='subTit'>{introduction}</p>
            <div className="checkListWrapper">
              <CheckList data={basic}/>
              <CheckList data={pro}/>
              {premium &&  <CheckList data={premium}/>}
              {master &&  <CheckList data={master}/>}
            </div>
          </ServiceSection>
          <ServiceSection>
            <strong className='tit'>전체 프로세스</strong>
            <p className='subTit'>{process}</p>
            <ProcessStep activeStep={processItem}/>
          </ServiceSection>
          <ServiceSection>
            <strong className='tit'>FAQ</strong>
            <Faq list={faq}/>
          </ServiceSection>
          <Button className={'btnNaver'} buttonTheme={'naver'}>네이버 예약하기</Button>
        </ContentBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-bottom:120px;
  .checkListWrapper {
    display:flex;
    .checkListBox {
      flex:1;
      + .checkListBox {
        margin-left:20px;
      }
      .list {
        width:100%;
      }
    }
  }
  .btnNaver {
    display:block;
    margin:0 auto;
  }
`
export default ServiceDetail