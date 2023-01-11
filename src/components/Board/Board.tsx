import Button from '@mui/material/Button';
import { StyledBoard, NameBadge, BadgeList } from './BoardStyles';
import folks from '../../data/folks';
import { chooseRandomName } from '../../utils/helpers';
import { useState } from 'react';

const Board: React.FC = () => {
  const [chosenOne, setChosenOne] = useState('');
  const [selected, setSelected] = useState('');

  const spinIt = () => {
    setSelected('');
    setChosenOne('');
    let chosen: string = '';
    const timerId = setInterval(() => {
      chosen = chooseRandomName(folks);
      setSelected(chosen);
    }, 400);
    setTimeout(() => {
      clearInterval(timerId);
      setChosenOne(chosen);
      setSelected('');
    }, 5000);
  };
  return (
    <StyledBoard>
      <BadgeList>
        {folks.map((f: string) => {
          const picked = f === selected ? 'selected' : '';
          const chosen = f === chosenOne ? 'chosen' : '';
          return (
            <NameBadge key={f} className={`${f} ${picked} ${chosen}`}>
              {f}
            </NameBadge>
          );
        })}
      </BadgeList>
      <Button variant='contained' size='large' onClick={spinIt}>
        Spin it!
      </Button>
    </StyledBoard>
  );
};

export default Board;
