import { FC } from 'react';

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  postsPerPage,
  totalPosts,
  paginate,
}: PaginationProps): JSX.Element => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='pagination-container'>
      <ul className='pagination-list-container'>
        {pageNumbers.map((number) => {
          return (
            <li key={number} className='page-item'>
              <a
                onClick={() => paginate(number)}
                href='/forum'
                className='page-link'
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
