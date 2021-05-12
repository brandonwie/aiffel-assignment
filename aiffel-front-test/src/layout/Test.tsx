import { FC } from 'react';
import Button from '../components/Button';
import Textarea from '../components/Textarea';

const Test: FC = (): JSX.Element => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Button type='button'>Default</Button>
      <Button type='button' className='primary sm'>
        Pr-Sm
      </Button>
      <Button type='button' className='secondary md'>
        Se-Md
      </Button>
      <Button type='button' className='success lg'>
        Su-Lg
      </Button>
      <Textarea placeholder='Normal' />
      <Textarea className='sm' placeholder='Small' />
      <Textarea className='md' placeholder='Medium' />
      <Textarea className='lg' placeholder='Large' />
    </div>
  );
};

export default Test;
