import { FC, ChangeEvent, MutableRefObject } from 'react';

interface InputProps {
  type: string;
  id: string;
  name: string;
  ref?: MutableRefObject<HTMLInputElement | null>;
  placeholder?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = (props: InputProps): JSX.Element => {
  return <input {...props} />;
};

export default Input;
