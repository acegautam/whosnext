import Button from '@mui/material/Button';
import { StyledBoard, NameBadge, BadgeList } from './BoardStyles';
import { chooseRandomName } from '../../utils/helpers';
import { useEffect, useState } from 'react';
import { fetchParticipants } from '../../utils/api';
import { FolksReponseType } from '../../types/common';

const Board: React.FC = () => {
  const [folks, setFolks] = useState([]);
  const [chosenOne, setChosenOne] = useState('');
  const [selected, setSelected] = useState('');

  useEffect(() => {
    const fetchFolks = async() => {
      const response = await fetchParticipants();
      if(!response?.data) return;
      const folksData = response.data.map((item: FolksReponseType) => item.data.name)
      setFolks(folksData);
      console.log('Loaded folks => ', folksData);
    }
    fetchFolks();
  }, [])

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
