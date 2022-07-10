import React from 'react'
import styled from 'styled-components'
import { Link} from 'react-router-dom'
function Map() {
  return (
    <Wrapper>
        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.00001349291!2d126.91527323189474!3d37.55506346794277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c98db7c95ffa5%3A0xee17dc400d2d07d1!2z7ISc7Jq47Yq567OE7IucIOuniO2PrOq1rCDrj5nqtZDroZwgMTU2LTEy!5e0!3m2!1sko!2skr!4v1656938288758!5m2!1sko!2skr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <dl className='address'>
            <dt>주소</dt>
            <dd>서울 마포구 동교로 156-12 코이멕스빌딩 2층 티릴리</dd>
        </dl>
        <div className="linkBox">
            <Link to="/">
                <strong>프로젝트 문의</strong>
                <p>
                    프로젝트 플랫폼 & 서비스<br/>
                    제작 문의하기
                </p>
            </Link>
            <Link to="/">
                <strong>투자 문의</strong>
                <p>
                    티릴리<br/>
                    투자 문의하기
                </p>
            </Link>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    .map {
        width:100%;
        height:340px;
        margin-bottom:32px;
    }
    .address {
        margin-bottom:32px;
        dt{
            margin-bottom:8px;
            font-size: 24px;
            font-weight: bold;
            line-height: 1.7;
            color: var(--gray-scale-black);
        }
        dd{
            font-size: 16px;
            line-height: 1.7;
            color: var(--gray-scale-black);
        }
    }
    .linkBox {
        display:flex;
        a {
            display:inline-block;
            width:50%;
            padding: 28px;
            border-radius: 8px;
            border: solid 1px var(--gray-scale-gray-3);
            background-color: var(--gray-scale-white);
            strong {
                font-size: 24px;
                font-weight: bold;
                line-height: 1.7;
                color: var(--gray-scale-black);
            }
            p {
                margin-top:4px;
                font-size: 16px;
                line-height: 1.7;
                color: var(--gray-scale-black);
            }
            + a {
                margin-left:20px;
            }
        }
    }
`
export default Map