import { FC, ReactText } from 'react';

interface SelectProps {
  children: ReactText;
}

const Select: FC<SelectProps> = ({ children }: SelectProps): JSX.Element => {
  return <input type="select">{children}</input>;
};

export default Select;
