import { FC } from 'react';
import { ForumPostProps } from '../state/actions';

interface PostDetailPageProps {
  post: ForumPostProps;
}

const ForumDetailPage: FC<PostDetailPageProps> = ({
  post,
}: PostDetailPageProps): JSX.Element => {
  return <div className='forum-container'>Hi Post!</div>;
};

export default ForumDetailPage;
