import { ChangeEvent, FC, MouseEvent } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

interface SearchBarProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onCancel: (event: MouseEvent<HTMLButtonElement>) => void;
}

const SearchBar: FC<SearchBarProps> = ({
  onClick,
  onChange,
  onCancel,
}: SearchBarProps): JSX.Element => {
  return (
    <div className='searchbar-container'>
      <Input
        type='text'
        id='searchbar'
        name='searchbar'
        placeholder='검색어를 입력하세요.'
        onChange={onChange}
      />
      <Button
        type='button'
        className='success md search-button'
        onClick={onClick}
      >
        검색하기
      </Button>
      <Button type='button' className='main md reset-button' onClick={onCancel}>
        처음으로
      </Button>
    </div>
  );
};

export default SearchBar;
