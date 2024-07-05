import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { PostGrid } from './components/PostGrid';
import { PostType, UserType } from './types';
import { GlobalStyle } from './styles/GlobalStyles';

const AppContainer = styled.div`
  padding: 20px;
`;

const App: React.FC = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [users, setUsers] = useState<{ [key: number]: UserType }>({});

  useEffect(() => {
    const fetchPostsAndUsers = async () => {
      try {
        const postResponse = await axios.get('https://dummyjson.com/posts');
        const firstTenPosts: PostType[] = postResponse.data.posts.slice(0, 10);
        setPosts(firstTenPosts);

        const userIds = firstTenPosts.map((post) => post.userId);
        const userResponses = await Promise.all(userIds.map((userId) => axios.get(`https://dummyjson.com/users/${userId}`)));
        const usersData = userResponses.reduce((acc: { [key: number]: UserType }, response) => {
          acc[response.data.id] = response.data;
          return acc;
        }, {});
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPostsAndUsers();
  }, []);

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <PostGrid posts={posts} users={users} />
      </AppContainer>
    </>
  );
};

export default App;
