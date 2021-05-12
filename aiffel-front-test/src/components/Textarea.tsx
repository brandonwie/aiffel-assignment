import { FC } from 'react';

interface TextareaProps {
  defaultValue?: string;
  placeholder?: string;
  className?: string;
}

const Textarea: FC<TextareaProps> = (props: TextareaProps): JSX.Element => {
  return <textarea {...props}>{props.defaultValue}</textarea>;
};

export default Textarea;
