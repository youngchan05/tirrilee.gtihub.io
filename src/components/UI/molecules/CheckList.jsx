import React from 'react'
import styled from 'styled-components'
import TextCheckList from '../atoms/TextCheckList';

function CheckList({data}) {
    console.log(data,'data')
    const { icon, title, sub, desc, price, list} = data;
  return (
    <Wrapper className='checkListBox'>
        <div className="boxTop">
            <i>{icon}</i>
            <strong>{title}</strong>
            <span>{sub}</span>
            <p className='checkListTit'>{desc}</p>
            <div className="list">
                {
                    list.map(i=> <TextCheckList isActive={i.isActive} text={i.title}/>)
                }
            </div>
            <p className='price checkListTit'>{price}</p>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    padding: 28px;
    border-radius: 8px;
    background-color: #f9fafc;
    cursor: pointer;
    .boxTop {
        display: flex;
        flex-direction: column;
        align-items: center;
        strong {
            margin-top:28px;
            font-size: 18px;
            font-weight: bold;
            line-height: 1.5;
            color: #3b3f4a;
        }
        span {
            margin-top:8px;
            font-size: 14px;
            line-height: 1.7;
            color: #5a5e6a;
        }
        .checkListTit {
            width:100%;
            margin:28px 0;
            padding:20px 0;
            font-size: 20px;
            font-weight: bold;
            color: #3b3f4a;
            text-align:center;
            border-top :solid 1px #e4e6ea;
            border-bottom :solid 1px #e4e6ea;
            &.price {
                margin-bottom:0;
            }
        }
    }
`
export default CheckList