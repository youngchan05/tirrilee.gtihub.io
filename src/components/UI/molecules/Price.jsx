import React from 'react'
import styled from 'styled-components'
import TextTag from '../atoms/TextTag';

function Price({item}) {
    const { icon, name, tag, planItem, pay }= item;
  return (
    <Wrapper className='priceItem'>
        <i className='icon'>{icon}</i>
        <div className='box'>
            <p className='inner'>
                <strong className='tit'>{name} <TextTag text={tag}/></strong>
                <span className='item'>{planItem}</span>
            </p>
            <span className='pay'>{pay}</span>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    i {
        flex:0 0 auto;
        width: 80px;
        height: 80px;
        margin-right:24px;
        svg {
            width:100%;
            height:100%;
        }
    }
    .box {
        display:flex;
        align-items: center;
        width: 100%;
        .inner {
            .tit {
                display:flex;
                margin-bottom:8px;
                align-items: center;
                font-size: 18px;
                font-weight: 500;
                line-height: 1.5;
                color: #000;
                div {
                    margin-left:12px;
                }
            }
            .item {
                font-size: 14px;
                line-height: 1.7;
                color: #5a5e6a;
            }
        }
        .pay {
            margin-left: auto;
            font-size: 20px;
            font-weight: bold;
            line-height: 1.5;
            color: #000;
        }
    }
    + .priceItem {
        margin-top:24px;
    }

`
export default Price