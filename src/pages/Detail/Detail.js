import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DetailFeed from './components/DetailFeed';
import DetailProfile from './components/DetailProfile';
import DetailCommentBox from './components/DetailCommentBox';
import API from '../../config.js';

const Detail = () => {
  const [feeds, setFeedData] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`${API.detail}/${params.id}`)
      .then(response => response.json())
      .then(result => setFeedData(result.post));
  }, [params.id]);

  return (
    <Container>
      <FeedBox>
        {feeds?.map(feed => {
          return <DetailFeed key={feed.id} feed={feed} />;
        })}
        {console.log(feeds)}
        <ReviewContainer>
          <div>
            <ReviewText1>조회</ReviewText1>
            <ReviewText2>203</ReviewText2>
            <ReviewText1>댓글</ReviewText1>
            <ReviewText2>{feeds[0]?.commentsQuantity}</ReviewText2>
          </div>
          <Report>신고하기</Report>
        </ReviewContainer>
      </FeedBox>
      <DetailProfile />

      <DetailCommentBox postId={feeds.id} />
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  padding-top: 200px;
`;

const FeedBox = styled.div`
  width: 720px;
  margin: 0 auto;
`;

const ReviewContainer = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'center')}
  width: 720px;
  height: 40px;
  border-bottom: 1px solid ${props => props.theme.style.middleGrey};
  margin: 0px 0 10px 10px;
`;

const ReviewText1 = styled.span`
  color: ${props => props.theme.style.middleGrey};
`;

const ReviewText2 = styled(ReviewText1)`
  margin: 0px 10px 0px 5px;
`;

const Report = styled.button`
  border: none;
  color: ${props => props.theme.style.middleGrey};
  background-color: ${props => props.theme.style.white};
  font-size: 14px;
  &:hover {
    display: block;
    height: 70%;
    background-color: ${props => props.theme.style.lightGrey};
  }
`;
