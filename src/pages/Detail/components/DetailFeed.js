import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DetailFeed = ({ feed }) => {
  const { products, room_size, residence, style, space, main_pic_url, text } =
    feed;
  
  return (
    <>
      <DetailNav>
        <DetailNavBtn>{room_size}</DetailNavBtn>
        <DetailNavBtn>{residence}</DetailNavBtn>
        <DetailNavBtn>{style}</DetailNavBtn>
        <DetailNavBtn>{space}</DetailNavBtn>
      </DetailNav>

      <DetailCircleBox>
        <DetailPic src={main_pic_url} />
        <DetailProductCont
          offset_X={Number(products[0].offset_X)}
          offset_Y={Number(products[0].offset_Y)}
        >
          <DetailBluePoint>
            <DetailBlueCircle>&#43;</DetailBlueCircle>
          </DetailBluePoint>
          <CircleProduct>
            <CircleProductInfo>
              <CircleProductImg src={products[0].sub_pic_url} />
              <CircleProductText>
                <Brand>{products[0].name}</Brand>
                <Description>{products[0].description}</Description>
              </CircleProductText>
            </CircleProductInfo>
          </CircleProduct>
        </DetailProductCont>
      </DetailCircleBox>

      <DetailSubPic>
      
        {feed.products.map((item, id) => (
          <DetailInnerProduct key={id} src={item.sub_pic_url} />
        ))}
     
      </DetailSubPic>
      <DetailText>{text}</DetailText>
      <DetailHashTagBox>
        {feed.hashtags?.map((tag, idx) => (
          <Link to={`/list?hashtag=${tag}`} key={idx}>
            <DetailHashTag>#{tag}</DetailHashTag>
          </Link>
        ))}
      </DetailHashTagBox>
    </>
  );
};

export default DetailFeed;

const DetailNav = styled.h1`
  width: 720px;
  height: 40px;
  margin: 0px 0px 20px 0px;
  color: ${props => props.theme.style.middleGrey};
`;

const DetailNavBtn = styled.button`
  padding: 12px;
  height: 32px;
  text-align: center;
  color: ${props => props.theme.style.middleGrey};
  background-color: ${props => props.theme.style.white};
  border: 1px solid white;
`;

const CircleProduct = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  margin-left: -150px;
  width: 300px;
  height: 100px;
  background-color: ${props => props.theme.style.lightGrey};
  display: none;
  z-index: 1;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: -20px;
    left: 50%;
    margin-left: -10px;
    width: 20px;
    height: 20px;
    background: url(./images/triangle.png) 50% 50% no-repeat;
    background-size: cover;
  }
`;

const DetailCircleBox = styled.div`
  position: relative;
`;

const DetailPic = styled.img`
  background-position: center;
  line-height: 15px;
  width: 720px;
  height: 720px;
  object-fit: cover;
`;

const DetailProductCont = styled.div`
  position: absolute;
  top: ${props => props.offset_Y}%;
  left: ${props => props.offset_X}%;
  &:hover ${CircleProduct} {
    display: block;
  }
`;

const DetailBluePoint = styled.button`
  width: 20px;
  height: 18px;
  background: ${props => props.theme.style.skyBlue};
  border-radius: 100%;
  font-size: 18px;
  z-index: 1;
  color: ${props => props.theme.style.white};
  border: none;
`;

const DetailBlueCircle = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  width: 100%;
  height: 100%;
`;

const CircleProductInfo = styled.div`
  ${props => props.theme.variables.flex('', 'space-evenly', 'center')}
  padding:10px;
`;

const CircleProductImg = styled.img`
  width: 80px;
  height: 80px;
`;

const CircleProductText = styled.div`
  width: calc(100% - 80px);
  padding-left: 10px;
`;

const Brand = styled.p`
  font-size: 11px;
  line-height: 17px;
  color: #757575;
`;

const Description = styled.p`
  font-size: 13px;
  line-height: 20px;
`;

const DetailSubPic = styled.div`
  ${props => props.theme.variables.flex('', 'flex-start', 'center')}
  width: 720px;
  padding: 20px 0 20px 0;
`;

const DetailInnerProduct = styled.img`
  position: relative;
  width: 100px;
  height: 100px;
  border: 1px solid ${props => props.theme.style.lightGrey};
  margin-left: 10px;
  background-position: center;
  background-size: cover;
  border-radius: 32px;
  &:hover {
    border: 3px solid ${props => props.theme.style.skyBlue};
  }
`;

const DetailText = styled.div`
  width: 720px;
  height: 24px auto;
  margin: 24px 0px;
  line-height: 20px;
`;

const DetailHashTagBox = styled.div`
  width: 720px;
  height: 24px;
  margin-bottom: 50px;
`;

const DetailHashTag = styled.button`
  color: ${props => props.theme.style.skyBlue};
  background-color: ${props => props.theme.style.white};
  font-size: 15px;
  border: none;
  margin: 5px 0 2px 0;
`;
