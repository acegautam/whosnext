import Button from '@mui/material/Button';
import { StyledBoard, NameBadge, BadgeList } from './BoardStyles';
import { chooseRandomName } from '../../utils/helpers';
import { useEffect, useState } from 'react';
import {
  fetchParticipants,
  fetchPresented,
  updateChosenOne,
} from '../../utils/api';
import { FolksReponseType } from '../../types/common';

const Board: React.FC = () => {
  const [folks, setFolks] = useState([]);
  const [chosenOne, setChosenOne] = useState('');
  const [selected, setSelected] = useState('');

  const fetchFolks = async () => {
    // get all participants
    const response = await fetchParticipants();
    if (!response?.data) return;
    const allData = response.data.map(
      (item: FolksReponseType) => item.data.name
    );

    // get all presented
    const presented = await fetchPresented();
    const presentedData =
      presented?.data?.map((item: FolksReponseType) => item.data.name) || [];

    // filter off presented guys
    const folksData = allData.filter(
      (name: string) => !presentedData.includes(name)
    );
    setFolks(folksData);
  };

  useEffect(() => {
    fetchFolks();
  }, []);

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

  const accept = async () => {
    await updateChosenOne(chosenOne);
    setSelected('');
    setChosenOne('');
    await fetchFolks();
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
      {chosenOne && (
        <Button
          variant='contained'
          color='success'
          size='large'
          onClick={accept}
        >
          Accept
        </Button>
      )}
    </StyledBoard>
  );
};

export default Board;
