import React from 'react';
import styled from 'styled-components';
import DeleteButton from './DeleteButton';
import API from '../../../config';

const DetailComment = ({
  paramsId,
  comments,
  removeComment,
  commentArray,
  setCommentArray,
  commentInfo,
  setCommentInfo,
}) => {
  // const [like, setLike] = useState(false);
  const accessToken = localStorage.getItem('token');
  const deleteComments = e => {
    fetch(`${API.comment}?commentId=${comments.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: accessToken,
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Delete Success') {
          alert('삭제 성공');
          setCommentInfo(data);
        } else {
          alert('삭제 실패');
        }
      })
      .then(() => window.location.reload());
  };
  return (
    <ReplyContainer>
      <CommentProfile
        src={
          comments.profile_image ? comments.profile_image : './images/user.png'
        }
        alt="프로필"
      />
      <div>
        <ReplyUserId>{comments.nickname}</ReplyUserId>
        <ReplyUserText>{comments.comment}</ReplyUserText>

        <ReplyEtc>
    
          {comments.commentEx == 1 ? (
            <DeleteButton id={comments.id} onClick={deleteComments} />
          ) : null}

  
        </ReplyEtc>
      </div>
    </ReplyContainer>
  );
};

export default DetailComment;

const CommentProfile = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 12px;
  border-radius: 100%;
`;

const ReplyContainer = styled.div`
  ${props => props.theme.variables.flex('', 'flex-start', '')}
  width: 100%;
  height: 80px;
  margin-top: 30px;
`;

const ReplyUserId = styled.div`
  
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
`;

const ReplyUserText = styled.div`
  width: 100%;
  margin: 8px 0px;
  line-height: 24px;
  overflow-wrap: break-word;
  word-break: keep-all;
  color: ${props => props.theme.style.black};
  font-size: 16px;
  
`;

const ReplyEtc = styled.div`
  height: 30px;
  ${props => props.theme.variables.flex('', '', 'center')}
`;



const ReplyDelete = styled.button`
  width: 40px;
  height: 18px;
  font-size: 12px;
  border: none;
  background-color: ${props => props.theme.style.white};
  color: ${props => props.theme.style.middleGrey};
  
`;
