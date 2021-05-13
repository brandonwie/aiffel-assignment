import { FC, useEffect, useState, MouseEvent, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { RootState } from '../state';
import Posts from '../layout/Posts';
import Pagination from '../layout/Pagination';
import SearchBar from '../layout/SearchBar';
import { ForumPostProps } from '../state/actions';
import { Redirect } from 'react-router-dom';

const Forum: FC = (): JSX.Element => {
  const { getForums } = useActions();
  const { posts } = useSelector((state: RootState) => state.forum);
  const { isAuthenticated } = useSelector((state: RootState) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [searchedPosts, setSearchedPosts] = useState<ForumPostProps[]>([]);

  // 먼저 정렬된 posts를 사용하겠습니다.
  const sortedPosts = posts.slice().sort((a, b) => b.id - a.id);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

  const searchedCurrentPosts = searchedPosts.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  useEffect(() => {
    const fetchForums = () => {
      getForums();
    };
    fetchForums();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const onClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (searchTerm.length === 0) {
      console.log('Need query');
      return;
    }
    setIsSearching(true);
    const searched = sortedPosts.filter(
      (post: ForumPostProps) =>
        post.title.includes(searchTerm) ||
        post.content.includes(searchTerm) ||
        post.tag.name.includes(searchTerm)
    );
    setSearchedPosts(searched);
    // 검색 시 첫 번째 페이지를 엽니다.
    paginate(1);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  const onCancel = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSearchTerm('');
    setIsSearching(false);
    paginate(1);
  };

  //! Later need to implement PrivateRoute
  if (!isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <div className='forum-container'>
      <SearchBar onClick={onClick} onChange={onChange} onCancel={onCancel} />
      {!isSearching ? (
        <Posts posts={currentPosts} />
      ) : searchedPosts.length !== 0 ? (
        <Posts posts={searchedCurrentPosts} />
      ) : (
        <div>'{searchTerm}'으로 검색 결과가 없습니다.</div>
      )}

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={isSearching ? searchedPosts.length : posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Forum;
