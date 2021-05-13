import { FC } from 'react';
import { ForumPostProps } from '../state/actions';

interface PostDetailProps {
  post: ForumPostProps;
}

const ForumDetail: FC<PostDetailProps> = ({
  post,
}: PostDetailProps): JSX.Element => {
  return <div className='forum-container'>Hi Post!</div>;
};

export default ForumDetail;
