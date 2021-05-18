import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { RootState } from '../state';
import Posts from '../layout/Posts';

const Forum: FC = (): JSX.Element => {
  const { getForums } = useActions();
  const { posts } = useSelector((state: RootState) => state.forum);

  useEffect(() => {
    const fetchForums = async () => {
      await getForums();
    };
    fetchForums();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='forum-container'>
      <Posts posts={posts} />
    </div>
  );
};

export default Forum;
