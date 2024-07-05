import React from 'react';
import styled from 'styled-components';
import { PostType, UserType } from '../types';

const PostContainer = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
`;

interface PostProps {
  post: PostType;
  user: UserType;
}

export const Post: React.FC<PostProps> = ({ post, user }) => {
  return (
    <PostContainer>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      {user && (
        <p>
          <strong>{user.firstName} {user.lastName}</strong>
        </p>
      )}
    </PostContainer>
  );
};
