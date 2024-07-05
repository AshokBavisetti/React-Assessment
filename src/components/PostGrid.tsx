import React from 'react';
import styled from 'styled-components';
import { PostType, UserType } from '../types';
import { Post } from './Post';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

interface PostGridProps {
  posts: PostType[];
  users: { [key: number]: UserType };
}

export const PostGrid: React.FC<PostGridProps> = ({ posts, users }) => {
  return (
    <GridContainer>
      {posts.map((post) => (
        <Post key={post.id} post={post} user={users[post.userId]} />
      ))}
    </GridContainer>
  );
};
