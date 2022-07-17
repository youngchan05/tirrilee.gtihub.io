import React from 'react'
import styled from 'styled-components'
import { IconMinssum, IconStauter } from '../../../common/svg'
import ContentBox from './ContentBox'

function BranItems() {
  const items = [
    {title:'민썸스쿨',sub:'창업 및 IT 기초 교육 서비스',icon:<IconMinssum/>,color:' var(--minssum)'},
    {title:'Stauter',sub:'IT 간편 견적 서비스',icon:<IconStauter/>,color:' var(--stauter)'},
  ]
  return (
    <ContentBox>
      <Wrapper>
          {
            items.map((i, idx) => {
              const { title, sub, icon,color} = i;
              return (
                <Item key={idx} itemColor={color} className='branItemBox'>
                  <i className='itemIcon'>{icon}</i>
                  <p className='brandText'>
                    <span>{sub}</span><br/>
                    <strong>{title}</strong>
                  </p>
                </Item>
              )
            })
          }
      </Wrapper>
    </ContentBox>
  )
}

const Wrapper = styled.div`
  display:flex;
`
const Item = styled.div`
  width:50%;
  padding-bottom:16px;
  border-radius: 20px ;
  border-top:40px solid ${props => props.itemColor ? props.itemColor : 'var(--gray-scale-gray-8);'};
  box-shadow: 12px 13px 30px var(--gray-scale-gray-3);
  text-align:center;
  .itemIcon {
    display: inline-block;
    margin:-20px 0 16px 0;
  }
  .brandText {
    span {
      display:inline-block;
      margin-bottom:4px;
      font-size: 16px;
      line-height:26px;
      color:var(--gray-scale-gray-8);
    }
    strong{
      display:inline-block;
      font-size: 24px;
      font-weight: bold;
      line-height: 40px;
      color:${props => props.itemColor ? props.itemColor : 'var(--gray-scale-gray-8);'};
    }
  }
  + .branItemBox {
    margin-left:20px;
  }

`
export default BranItems