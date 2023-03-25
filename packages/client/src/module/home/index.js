import React, { useState } from 'react';

import * as Styled from './home.styled';
import { ArbitraryPostCard, LastPostCard, PostCard, RandomPostCard } from './component';
import { Pagination } from '../common/component';

import photo from '../../assets/image/png/Pic.png';
import photo2 from '../../assets/image/png/Pic-2.png';

export const posts = [
  {
    image: photo,
    direction: 'Pharmaceuticals',
    title: 'A Sure Way To Get Rid Of Your Back Ache Problem',
    description:
      'If you have tried everything, but still seem to suffer from snoring, don’t give up. Before turning to surgery, consider shopping for anti-snore devices. These products do not typically require a prescription, are economically priced and may just be the answer that you are looking for. However, as is the case when shopping for anything, there are a lot of anti-snore devices out there and…',
    author: 'Jim Sullivan',
    date: ''
  },
  {
    image: photo2,
    direction: 'Pharmaceuticals',
    title: 'Basic Swedish Back Massage Techniques',
    description:
      'If you have tried everything, but still seem to suffer from snoring, don’t give up. Before turning to surgery, consider shopping for anti-snore devices. These products do not typically require a prescription, are economically priced and may just be the answer that you are looking for. However, as is the case when shopping for anything, there are a lot of anti-snore devices out there and…',
    author: 'Jim Sullivan',
    date: ''
  },
  {
    image: photo2,
    direction: 'Pharmaceuticals',
    title: 'How to Learn Coding for Beginners',
    description:
      'If you have tried everything, but still seem to suffer from snoring, don’t give up. Before turning to surgery, consider shopping for anti-snore devices. These products do not typically require a prescription, are economically priced and may just be the answer that you are looking for. However, as is the case when shopping for anything, there are a lot of anti-snore devices out there and…',
    author: 'Jim Sullivan',
    date: ''
  },
  {
    image: photo2,
    direction: 'Pharmaceuticals',
    title: 'Google’s Influence Over Think Tanks',
    description:
      'If you have tried everything, but still seem to suffer from snoring, don’t give up. Before turning to surgery, consider shopping for anti-snore devices. These products do not typically require a prescription, are economically priced and may just be the answer that you are looking for. However, as is the case when shopping for anything, there are a lot of anti-snore devices out there and…',
    author: 'Jim Sullivan',
    date: ''
  },
  {
    image: '',
    direction: 'Pharmaceuticals',
    title: '30 Exercises That Should Be in Your Workout Routine',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst ut senectus ut purus odio amet lorem. Malesuada ridiculus elementum tempus, nullam. Morbi volutpat nulla vel proin viverra adipiscing. Mi euismod morbi congue malesuada. Et sed aliquet ullamcorper nibh amet vitae accumsan. Viverra arcu vitae risus pellentesque nec arcu. Feugiat habitant sodales vel.',
    author: 'Jim Sullivan',
    date: ''
  }
];

const Home = () => {
  const [page, setPage] = useState(1);

  return (
    <Styled.Container>
      <Styled.Content>
        <RandomPostCard post={posts[0]} />
        <LastPostCard posts={[posts[1], posts[2], posts[3]]} />
        <ArbitraryPostCard post={posts[4]} />

        <Styled.PostsContainer>
          <Styled.PostsContent>
            {posts.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </Styled.PostsContent>

          {30 && 30 > 10 ? (
            <Pagination
              totalCount={100}
              pageSize={6}
              siblingCount={1}
              onPageChange={(num) => setPage(num)}
              currentPage={page}
            />
          ) : null}
        </Styled.PostsContainer>
      </Styled.Content>
    </Styled.Container>
  );
};
export default Home;
