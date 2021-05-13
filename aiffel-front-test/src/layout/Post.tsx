import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ForumPostProps } from '../state/actions';

interface PostProps {
  post: ForumPostProps;
}

const Post: FC<PostProps> = ({ post }: PostProps): JSX.Element => {
  const { id, title, content, tag } = post;
  const partialContent = content.slice(0, 100);
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return (
    <li className='forum-post-container'>
      <Link to={'forum/' + id.toString()} className='forum-post-link'>
        <div className='forum-post-title'>{title}</div>
        <div className='forum-post-content'>{partialContent}...</div>
        <div className='forum-post-info'>
          <div className='forum-post-tag'>#{tag.name}</div>
          <div className='forum-post-date'>
            {month}/{day}/{year}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Post;
