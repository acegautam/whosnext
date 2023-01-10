import Button from '@mui/material/Button';
import { StyledBoard, NameBadge } from './BoardStyles';
import folks from '../../data/folks';
import { chooseRandomName } from '../../utils/helpers';
import { useState } from 'react';

const Board: React.FC = () => {
  const [chosenOne, setChosenOne] = useState('')
  const spinIt = () => {
    const selected = chooseRandomName(folks);
    console.log({selected});
    setChosenOne(selected);
  };
  return (
    <StyledBoard>
      {folks.map((f: string) => {
        const selected = (f === chosenOne) ? 'selected' : '';
        return <NameBadge className={`${f} ${selected}`}>{f}</NameBadge>;
      })}
      <Button variant='contained' onClick={spinIt}>Spin it!</Button>
    </StyledBoard>
  );
};

export default Board;
