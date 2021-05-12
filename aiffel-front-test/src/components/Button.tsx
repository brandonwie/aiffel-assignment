import { FC, MouseEvent, ReactText } from 'react';

export interface ButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined;
  children: ReactText;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = (props: ButtonProps): JSX.Element => {
  return <button {...props}>{props.children}</button>;
};

export default Button;
