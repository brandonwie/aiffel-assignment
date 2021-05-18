import { ChangeEvent, MouseEvent, useState, VFC } from 'react';
import { ForumPostProps } from '../state/actions';
import Pagination from './Pagination';
import Post from './Post';
import SearchBar from './SearchBar';

type PostsProps = {
  posts: ForumPostProps[];
};

const Posts: VFC<PostsProps> = ({ posts }: PostsProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(5);
  const [searchedPosts, setSearchedPosts] = useState<ForumPostProps[]>([]);

  // Pagination
  //* 1. Sort posts
  const sortedPosts = posts.slice().sort((a, b) => b.id - a.id);
  //* 2. Calc Indices
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  //* 3. (without Search) Slice current posts
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  //* 4. (with Search) Slice searched posts
  const searchedCurrentPosts = searchedPosts.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  // Change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const onCancel = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSearchTerm('');
    setIsSearching(false);
    paginate(1);
  };

  const onSearch = (event: MouseEvent<HTMLButtonElement>) => {
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

  return (
    <>
      <SearchBar onSearch={onSearch} onChange={onChange} onCancel={onCancel} />
      <ul className='forum-list-container'>
        {(isSearching ? searchedCurrentPosts : currentPosts).map(
          (post: ForumPostProps) => (
            <Post key={post.id} post={post} />
          )
        )}
      </ul>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={isSearching ? searchedPosts.length : posts.length}
        paginate={paginate}
      />
    </>
  );
};

export default Posts;
