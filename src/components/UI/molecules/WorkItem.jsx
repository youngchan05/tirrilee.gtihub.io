import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import TextTag from '../atoms/TextTag';

function WorkItem({item}) {
    const { tag, plan, type, title, desc, client, period, color, link, url} = item;
  return (
    <Wrapper>
        <Link to={`/work/${link}`}>
            <div className="workImg">
                {
                    url && <img src={url} alt="" />
                }
            </div>
            <div className="textBox">
                <div className="workTags">
                    <TextTag type={plan} text={plan}/>
                    {
                        type && type.length > 0 ?
                        type.map( i => <TextTag text={i}/>) :null
                    }
                </div>
                <strong className='title'>{title}</strong>
                <div className="info">
                    <span className='client'>{client}</span>
                    <span className='period'>{period}</span>
                </div>
            </div>
        </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    position:relative;
    width:calc(33.33% - 20px);
    margin:20px 0 0 20px;
    border-radius: 8px;
    overflow: hidden;
    border: solid 1px var(--gray-scale-gray-3);
    &:hover {
        border: solid 1px var(--primary-p-500);
        transition: esce-in .2s;
    }
    .workImg {
        position:relative;
        padding-top: 73.4%;
        background-color: var(--gray-scale-gray-2);
    }
    .textBox {
        backgruond-color:#fff;
        padding: 20px;
        .title {
            display:inline-block;
            margin-bottom:8px;
            font-size: 20px;
            font-weight: bold;
            line-height: 1.5;
            color: var(--gray-scale-black);
        }
        .info {
            display:flex;
            align-items: center;
        }
        .client {
            display:inline-block;
            font-size: 14px;
            font-style: normal;
            color: var(--gray-scale-gray-8);
        }
        .period{
            display:inline-block;
            margin-left:8px;
            font-size: 12px;
            line-height: 1.7;
            color: var(--gray-scale-gray-8);
        }
    }
    .workTags {
        display:flex;
        margin-bottom:12px;
        div + div {
            margin-left:8px;
        }
    }
`
export default WorkItem