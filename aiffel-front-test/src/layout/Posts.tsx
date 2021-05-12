import { FC } from 'react';
import { ForumPostProps } from '../state/actions';
import Post from './Post';

interface PostsProps {
  posts: ForumPostProps[];
}

const Posts: FC<PostsProps> = ({ posts }: PostsProps): JSX.Element => {
  return (
    <ul className='forum-list-container'>
      {posts.map((post: ForumPostProps) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default Posts;
